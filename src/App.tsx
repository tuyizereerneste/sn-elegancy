import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import Login from "./app/auth/Login";
import Dashboard from "./app/Dashboard/Dashboard";
import Projects from "./app/Dashboard/Projects/Projects";
import ProjectDetails from "./app/Dashboard/Projects/ProjectDetails";
import Blogs from "./app/Dashboard/Blog/Blog";
import BlogDetails from "./app/Dashboard/Blog/BlogDetails";
import TestimonyDetails from "./app/Dashboard/Testimonials/TestimonyDetails";
import Testimonials from "./app/Dashboard/Testimonials/Testimonials";
import Messages from "./app/Dashboard/Messages/Messages";
import MessageDetails from "./app/Dashboard/Messages/MessageDetails";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();

  // Define routes where the Navbar and Footer should be hidden
  const hideNavbarRoutes = [
    "/login",
    "/dashboard",
    "/dashboard/projects",
    "/dashboard/projects/:id",
    "/dashboard/blogs",
    "/dashboard/blogs/:id",
  ];

  // Check if the current route is in the list of routes where the Navbar should be hidden
  const shouldShowNavbar = !hideNavbarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />

          <Route path="/login" element={<Login />} />

          {/* Dashboard route with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetails onClose={() => console.log('BlogDetails closed')} />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="testimonials/:id" element={<TestimonyDetails />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/:id" element={<MessageDetails />} />
          </Route>
        </Routes>
      </main>
      {shouldShowNavbar && <Footer />}
    </div>
  );
};

export default App;