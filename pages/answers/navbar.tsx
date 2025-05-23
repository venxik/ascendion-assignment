import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { id: "showcase", title: "Showcase", href: "/" },
    { id: "docs", title: "Docs", href: "/" },
    { id: "blog", title: "Blog", href: "/" },
    { id: "analytics", title: "Analytics", href: "/" },
    { id: "templates", title: "Templates", href: "/" },
    { id: "enterprise", title: "Enterprise", href: "/" },
  ];

  useEffect(() => {
    const checkScreenSize = (): void => {
      const windowWidth = Dimensions.get("window").width;
      setIsMobile(windowWidth < 768);
    };
    checkScreenSize();
    Dimensions.addEventListener("change", checkScreenSize);
    return () => {};
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const DesktopNavbar: React.FC = () => (
    <View style={styles.desktopNavbar}>
      <View style={styles.navLeft}>
        <Text style={styles.logo}>AEON</Text>
        <View style={styles.navLinks}>
          {navLinks.map((link) => (
            <TouchableOpacity key={link.id}>
              <Text style={styles.navLink}>
                <a
                  href={link.href}
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  {link.title}
                </a>
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search documentation..."
        />
      </View>
    </View>
  );

  const MobileNavbar: React.FC = () => (
    <View style={styles.mobileNavContainer}>
      <View style={styles.mobileNavHeader}>
        <Text style={styles.logo}>AEON</Text>
        <TouchableOpacity onPress={toggleMenu}>
          {isMenuOpen ? (
            <Text style={styles.menuIcon}>✕</Text>
          ) : (
            <Text style={styles.menuIcon}>☰</Text>
          )}
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <View style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <TouchableOpacity key={link.id}>
              <Text style={styles.mobileNavLink}>
                <a
                  href={link.href}
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  {link.title}
                </a>
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  desktopNavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 30,
  },
  navLinks: {
    flexDirection: "row",
  },
  navLink: {
    marginRight: 20,
    fontSize: 14,
    color: "#333",
  },
  searchContainer: {
    flex: 1,
    maxWidth: 300,
    marginLeft: 20,
  },
  searchInput: {
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    fontSize: 14,
  },
  // Mobile styles
  mobileNavContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  mobileNavHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
  },
  menuIcon: {
    fontSize: 24,
    color: "#333",
  },
  mobileMenu: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  mobileNavLink: {
    paddingVertical: 15,
    fontSize: 16,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navbar;
