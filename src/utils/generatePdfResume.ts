import { jsPDF } from 'jspdf';
import { portfolioData } from '../data/portfolioData';

/**
 * Generates an executive, ATS-friendly PDF resume for Yash Kharel
 * using jsPDF and triggers an immediate direct download.
 */
export const downloadResumePdf = () => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = 16;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - 14) {
        doc.addPage();
        y = 16;
      }
    };

    // --- Header Section ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text('YASH KHAREL', margin, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(13, 148, 136); // teal-600
    doc.text('Co-Founder | Business Development | Senior Software Engineer | Ideator', margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105); // slate-600
    const contactLine1 = `Email: ${portfolioData.email}  |  Phone: ${portfolioData.phone}  |  Location: ${portfolioData.location}`;
    doc.text(contactLine1, margin, y);
    y += 4.5;

    const contactLine2 = `LinkedIn: ${portfolioData.linkedinUrl}  |  GitHub: https://github.com/yash048  |  Web: ${portfolioData.originalSiteUrl}`;
    doc.text(contactLine2, margin, y);
    y += 6;

    // Header divider line
    doc.setDrawColor(204, 251, 241); // teal-100
    doc.setLineWidth(0.6);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    // Helper for Section Headers
    const renderSectionHeader = (title: string) => {
      checkPageBreak(12);
      doc.setFillColor(240, 253, 250); // teal-50
      doc.roundedRect(margin, y, contentWidth, 6.5, 1.5, 1.5, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(15, 118, 110); // teal-700
      doc.text(title.toUpperCase(), margin + 3, y + 4.6);
      y += 9.5;
    };

    // --- 1. Executive Summary ---
    renderSectionHeader('Executive Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const summaryLines = doc.splitTextToSize(
      'Co-Founder, Business Development, and Senior Software Engineer with 8+ years of experience launching products, scaling operations, and engineering cross-functional systems. Proven track record scaling Bagisha Reading Room into 100% operational autopilot, launching Lumasha on Google Play and Apple App Store, and directing multi-program academy delivery at Dlytica Inc. Holds an MBA from Queen Margaret University (Edinburgh, UK) and a B.Sc. in Computer Science from Kathmandu University.',
      contentWidth
    );
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 4.2 + 4;

    // --- 2. Academic Credentials ---
    renderSectionHeader('Education & Credentials');
    const educations = [
      {
        degree: 'Master of Business Administration (MBA)',
        school: 'Queen Margaret University',
        location: 'Edinburgh, Scotland, UK',
        period: '2020 - 2022',
        details: 'Focus: Strategic Business Development, Corporate P&L, Operations & International Venture Scaling'
      },
      {
        degree: 'Bachelor of Science in Computer Science (B.Sc. CS)',
        school: 'Kathmandu University',
        location: 'Kathmandu, Nepal',
        period: '2013 - 2017',
        details: 'Focus: Software Engineering, Data Structures, Algorithms, Distributed Systems, Database Architecture'
      }
    ];

    educations.forEach((edu) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(edu.degree, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      const rightText = `${edu.period} | ${edu.location}`;
      const rightWidth = doc.getTextWidth(rightText);
      doc.text(rightText, pageWidth - margin - rightWidth, y);
      y += 4;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(13, 148, 136);
      doc.text(edu.school, margin, y);
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text(edu.details, margin, y);
      y += 5.5;
    });

    // --- 3. Featured Products & Ventures ---
    renderSectionHeader('Featured Products & Ventures');
    const featuredProjects = [
      {
        name: 'Lumasha (Mobile App & Omnichannel Ecosystem)',
        role: 'Founder & Software Engineer',
        links: 'Live on Google Play Store (com.yash048.lumasha) & Apple App Store (ID: 6749781997)',
        desc: 'Engineered cross-platform mobile language education application with native audio voice playback, interactive flashcards, and physical kits distributed internationally.'
      },
      {
        name: 'Bagisha Reading Room',
        role: 'Co-Founder & Head of Operations',
        links: 'https://kharelyash.com.np/',
        desc: 'Conceived, launched, and scaled a premier urban sanctuary into 100% operational autopilot. Created recurring subscription tiers, digital seat reservation workflows, and full-stack operational playbooks with zero daily founder intervention.'
      },
      {
        name: 'Dlytica Academy Operations & Telemetry System',
        role: 'Academy Manager & Operations Lead (Toronto, ON)',
        links: 'Centralized CRM & Cohort Lifecycle',
        desc: 'Directed workforce enablement, automated student lifecycle tracking pipelines, and led corporate hiring partner engagements across Ontario.'
      }
    ];

    featuredProjects.forEach((proj) => {
      checkPageBreak(14);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(proj.name, margin, y);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(13, 148, 136);
      doc.text(` — ${proj.role}`, margin + doc.getTextWidth(proj.name), y);
      y += 3.8;

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(proj.links, margin, y);
      y += 3.8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      const descLines = doc.splitTextToSize(proj.desc, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 3.8 + 3.5;
    });

    // --- 4. Professional Experience & Jobs ---
    renderSectionHeader('Professional Experience & Career History');

    const jobList = portfolioData.experiences;
    jobList.forEach((job) => {
      checkPageBreak(18);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(job.role, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      const periodText = `${job.period} | ${job.location}`;
      const periodWidth = doc.getTextWidth(periodText);
      doc.text(periodText, pageWidth - margin - periodWidth, y);
      y += 4.2;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(13, 148, 136);
      doc.text(job.company, margin, y);
      y += 4;

      // Bullets (take key 3-4 bullets per job to keep clean formatting)
      const bulletsToPrint = job.bulletPoints.slice(0, 4);
      bulletsToPrint.forEach((bullet) => {
        checkPageBreak(8);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(51, 65, 85);
        const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 3);
        doc.text(bulletLines, margin + 2, y);
        y += bulletLines.length * 3.6 + 1.2;
      });

      y += 2.5;
    });

    // --- 5. Core Technologies & Stack ---
    renderSectionHeader('Technical Stack & Competencies');
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text('Languages & Frameworks: ', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Java 17, Spring Boot, React, React Native, Angular, TypeScript, Python, Node.js', margin + 37, y);
    y += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.text('Data & Architecture: ', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('PostgreSQL, MySQL, RESTful APIs, Concurrency, Microservices, ACID Transactions', margin + 31, y);
    y += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.text('Business & Leadership: ', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('GTM Strategy, B2B/B2C Sales, Operational Autopilot, P&L Modeling, CRM Lifecycle, Agile', margin + 34, y);
    y += 8;

    // Footer on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // slate-400
      const footerText = `Yash Kharel — Curriculum Vitae | Page ${i} of ${totalPages} | Generated ${new Date().toLocaleDateString()}`;
      doc.text(footerText, pageWidth / 2, pageHeight - 8, { align: 'center' });
    }

    // Save and download file
    doc.save('Yash_Kharel_Curriculum_Vitae.pdf');
    return true;
  } catch (error) {
    console.error('Failed to generate PDF resume with jsPDF:', error);
    return false;
  }
};
