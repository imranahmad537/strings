// config/products.tsx
import React from 'react';
import { Building2, Users, CreditCard, Wrench, CheckCircle2, Zap, Clock, Code2, ShieldAlert, Calendar, FileSpreadsheet, BookOpen, BarChart3, Award, Globe, Scan, Cpu, ShieldCheck, Boxes, Truck, Network, FileText, ShoppingBag } from 'lucide-react';

export interface ProductConfig {
    title: string;
    heroSubtext: string;
    heroImg: string;
    highlights: { icon: React.ReactNode; label: string; subtext: string }[];
    overviewText: string;
    overviewImg: string;
    features: { icon: React.ReactNode; title: string; description: string }[];
    ctaTitle: string;
    ctaDescription: string;
}

export const productArchive: Record<string, ProductConfig> = {
    // If the browser URL is /products/pms, it uses this block:
    "pms": {
        title: "Property Management System",
        heroSubtext: "Smart Real Estate Operations & Tenant Management Software.",
        heroImg: "/pms.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Property Management System is designed to simplify property operations for real estate agencies, builders, landlords, and housing societies. From tenant onboarding to lease renewals, automated rent collection, maintenance tracking, and financial reporting— everything is managed through one centralized platform. Built with security, automation, and scalability in mind, it helps businesses reduce manual workload, improve tenant satisfaction, and maximize operational performance.",
        overviewImg: "/property-overview.png",
        features: [
            { icon: <Building2 size={18} />, title: "Property & Unit Management", description: "Easily manage multiple properties, unit details, occupancy status, and ownership records from a unified dashboard." },
            { icon: <Users size={18} />, title: "Tenant Management", description: "Streamline tenant onboarding, lease lifecycle, documentation, and communication within a secure, unified platform." },
            { icon: <CreditCard size={18} />, title: "Payment & Billing", description: "Generate invoices, track rent collection, send payment reminders, and automate recurring billing processes." },
            { icon: <Wrench size={18} />, title: "Maintenance & Support", description: "Log, assign, and track maintenance requests with vendor management, repair history, and automated notifications." }
        ],
        ctaTitle: "Ready to Optimize Your Distribution Network?",
        ctaDescription: "Join over 500 enterprise distributors who have scaled their operations with Strings Technologies."
    },

    // If the browser URL is /products/erp, it uses this block:
    "erp": {
        title: "Enterprise Resource Planning (ERP)",
        heroSubtext: "Unify corporate infrastructure under an automated, secure ecosystem.",
        heroImg: "/erphero.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Global Scale", subtext: "Enterprise ready" },
            { icon: <ShieldAlert size={16} />, label: "Data Integrity", subtext: "Validated syncing" },
            { icon: <Code2 size={16} />, label: "Automation", subtext: "Predictive scaling" },
            { icon: <Clock size={16} />, label: "Uptime Sync", subtext: "99.9% guaranteed" }
        ],
        overviewText: "Our high-velocity ERP platform orchestrates your core business functionality...",
        overviewImg: "/erpbenefit.png",
        features: [
            { icon: <Code2 size={18} />, title: "Workflow Logic", description: "Automate accounting ledger workflows smoothly." },
            { icon: <ShieldAlert size={18} />, title: "Tier-1 Security", description: "State-of-the-art encryption protocols ensuring your data is safe." }
        ],
        ctaTitle: "Ready to Transform Your Core Enterprise Operations?",
        ctaDescription: "Join the leading organizations that rely on Strings Technologies for mission-critical infrastructure."
    },
    "cms": {
        title: "Campus Management System",
        heroSubtext: "A centralized digital platform to manage students, faculty, admissions, attendance, examinations, fees, and academic performance with complete automation.",
        heroImg: "/cms.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Campus Management System is a powerful educational ERP solution designed for schools, colleges, universities, and training institutes to automate and simplify academic operations. From student admissions and attendance tracking to fee management, examinations, faculty coordination, and performance reporting — everything is managed from one intelligent platform. Built for modern institutions, it improves efficiency, enhances communication, and ensures smooth academic administration.",
        overviewImg: "/campus-overview.png",
        features: [
            { icon: <Users size={18} />, title: "Student Information Management", description: "Manage student profiles, admissions, registrations, academic records, class assignments, and personal data securely." },
            { icon: <Calendar size={18} />, title: "Attendance & Faculty Management", description: "Track attendance, monitor faculty schedules, assign classes, and maintain academic discipline with real-time updates." },
            { icon: <CreditCard size={18} />, title: "Fee & Billing Management", description: "Automate fee collection, generate invoices, payment reminders, receipts, and maintain complete financial transparency." },
            { icon: <FileSpreadsheet size={18} />, title: "Examination & Results Processing", description: "Manage exams, grading systems, report cards, result publishing, and academic performance analytics efficiently." }
        ],
        ctaTitle: "Ready to Transform Your Campus Administration?",
        ctaDescription: "Join educational institutions that have scaled and automated their operations with Strings Technologies."
    },
    "lms": {
        title: "Learning Management System",
        heroSubtext: "A complete cloud-based solution to create, manage, deliver, and track online learning programs, student progress, assessments, and training performance efficiently.",
        heroImg: "/lms.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Learning Management System is a modern educational platform designed for schools, universities, training institutes, and corporate organizations to streamline digital learning experiences. From course creation and content delivery to assessments, student performance tracking, certification management, and real-time analytics — everything is managed through one centralized system. Built for scalability, flexibility, and engagement, it enables institutions to deliver high-quality learning experiences anytime, anywhere.",
        overviewImg: "/lms-overview.png",
        features: [
            { icon: <BookOpen size={18} />, title: "Course Creation & Content Management", description: "Create structured courses, upload learning materials, organize modules, assignments, quizzes, and interactive lessons easily." },
            { icon: <BarChart3 size={18} />, title: "Student Progress Tracking", description: "Monitor learner activity, course completion rates, performance analytics, and academic engagement in real-time." },
            { icon: <Award size={18} />, title: "Assessments & Certifications", description: "Conduct quizzes, exams, assignments, automated grading, and issue digital certificates upon successful completion." },
            { icon: <Globe size={18} />, title: "Anytime, Anywhere Access", description: "Provide 24/7 access to courses, recorded sessions, live classes, and collaborative learning resources from anywhere." }
        ],
        ctaTitle: "Ready to Elevate Your Digital Learning Experience?",
        ctaDescription: "Join institutions and organizations that have scaled their educational delivery with Strings Technologies."
    },
    "omr": {
        title: "Optical Mark Recognition System",
        heroSubtext: "A powerful automated system for fast, accurate, and secure scanning, evaluation, and result processing of objective-based examinations.",
        heroImg: "/omr.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Optical Mark Recognition (OMR) System is designed for educational institutions, testing organizations, and examination boards to automate answer sheet scanning and result processing. From paper-based test evaluation and instant score generation to detailed performance analytics and report publishing—everything is handled through one intelligent platform. Built for speed, precision, and scalability, it minimizes manual errors, saves administrative time, and ensures reliable assessment processing.",
        overviewImg: "/omr-overview.png",
        features: [
            { icon: <Scan size={18} />, title: "Automated Answer Sheet Scanning", description: "Quickly scan and process thousands of answer sheets with high-speed intelligent recognition technology." },
            { icon: <Cpu size={18} />, title: "Instant Result Processing", description: "Generate results automatically with precise scoring algorithms and reduce evaluation time significantly." },
            { icon: <BarChart3 size={18} />, title: "Performance Analytics & Reporting", description: "Access detailed student performance insights, subject analysis, comparative reports, and exam statistics instantly." },
            { icon: <ShieldCheck size={18} />, title: "Secure Data Management", description: "Store examination records securely with encrypted access control and centralized report management." }
        ],
        ctaTitle: "Ready to Automate Your Examination Processing?",
        ctaDescription: "Join institutions and testing organizations that have scaled their assessment workflows with Strings Technologies."
    },
    "dms": {
        title: "Distribution Management System",
        heroSubtext: "A centralized digital solution to manage inventory, distributors, order processing, deliveries, sales tracking, and supply chain operations efficiently.",
        heroImg: "/dms.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Distribution Management System is designed to help manufacturers, wholesalers, and distributors streamline supply chain operations with complete automation and real-time control. From inventory monitoring and order management to distributor coordination, shipment tracking, and sales analytics — everything is managed through one intelligent platform. Built for speed, scalability, and operational efficiency, it helps businesses reduce delays, improve accuracy, and maximize distribution performance.",
        overviewImg: "/distribution-overview.png",
        features: [
            { icon: <Boxes size={18} />, title: "Inventory & Stock Management", description: "Track inventory levels, warehouse stock movement, product availability, and automated replenishment processes in real-time." },
            { icon: <Truck size={18} />, title: "Order Processing & Fulfillment", description: "Manage customer orders, automate processing workflows, dispatch scheduling, and ensure timely deliveries." },
            { icon: <Network size={18} />, title: "Distributor Network Management", description: "Monitor distributor activities, performance analytics, regional sales operations, and communication through one centralized system." },
            { icon: <BarChart3 size={18} />, title: "Sales Analytics & Reporting", description: "Generate detailed sales insights, delivery reports, operational KPIs, and forecasting analytics for better decision-making." }
        ],
        ctaTitle: "Ready to Optimize Your Distribution Network?",
        ctaDescription: "Join over 500 enterprise distributors who have scaled their operations with Strings Technologies."
    },
    "hms": {
        title: "Hospital Management System",
        heroSubtext: "A complete digital platform to manage patients, appointments, billing, medical records, staff operations, pharmacy, and hospital administration efficiently.",
        heroImg: "/hms.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our Hospital Management System is an advanced healthcare software solution designed for hospitals, clinics, diagnostic centers, and healthcare institutions to streamline daily operations. From patient registration and appointment scheduling to billing management, pharmacy control, staff coordination, and medical record management — everything is handled through one intelligent centralized platform. Built for efficiency, accuracy, and patient-focused care, it helps healthcare providers improve operational performance and deliver better medical services.",
        overviewImg: "/hospital-overview.png",
        features: [
            { icon: <FileText size={18} />, title: "Patient Records Management", description: "Securely manage patient profiles, medical history, prescriptions, treatment records, and appointment details in one place." },
            { icon: <Calendar size={18} />, title: "Appointment & Doctor Scheduling", description: "Automate patient appointments, doctor availability, consultation schedules, and real-time notifications." },
            { icon: <CreditCard size={18} />, title: "Billing & Pharmacy Management", description: "Handle invoices, payments, pharmacy inventory, medicine dispensing, and financial reporting with complete accuracy." },
            { icon: <BarChart3 size={18} />, title: "Reports & Healthcare Analytics", description: "Generate patient reports, operational insights, treatment analytics, and hospital performance dashboards instantly." }
        ],
        ctaTitle: "Ready to Elevate Your Healthcare Operations?",
        ctaDescription: "Join healthcare institutions that have modernized their patient care and medical administration with Strings Technologies."
    },
    "ecommerce": {
        title: "E-Commerce Management System",
        heroSubtext: "A complete digital solution to manage products, orders, customers, payments, inventory, and online sales operations through one centralized platform.",
        heroImg: "/ecommerce.png",
        highlights: [
            { icon: <CheckCircle2 size={16} />, label: "Premium Quality", subtext: "Industry certified" },
            { icon: <Zap size={16} />, label: "High Performance", subtext: "Optimized results" },
            { icon: <Building2 size={16} />, label: "Easy to Use", subtext: "Simple setup" },
            { icon: <Clock size={16} />, label: "24/7 Support", subtext: "Always available" }
        ],
        overviewText: "Our E-Commerce Management System is a powerful commerce platform designed for retailers, online businesses, marketplaces, and growing brands to streamline digital selling operations. From product listings and inventory control to order management, customer engagement, payment processing, and sales analytics — everything is managed through one intelligent system. Built for scalability, automation, and seamless customer experiences, it helps businesses optimize operations, increase conversions, and accelerate online growth.",
        overviewImg: "/ecommerce-overview.png",
        features: [
            { icon: <ShoppingBag size={18} />, title: "Product & Inventory Management", description: "Manage product catalogs, pricing, stock levels, categories, variants, and inventory updates from one centralized dashboard." },
            { icon: <CreditCard size={18} />, title: "Order & Payment Management", description: "Track customer orders, payment processing, invoices, shipping status, and automated order workflows efficiently." },
            { icon: <Users size={18} />, title: "Customer & User Management", description: "Maintain customer profiles, purchase history, communication records, loyalty programs, and user engagement activities." },
            { icon: <BarChart3 size={18} />, title: "Sales Analytics & Reporting", description: "Generate real-time sales reports, customer insights, revenue tracking, performance analytics, and business dashboards." }
        ],
        ctaTitle: "Ready to Scale Your Online Sales Experience?",
        ctaDescription: "Join growing brands and enterprise retailers that have scaled and automated their commerce workflows with Strings Technologies."
    },
};