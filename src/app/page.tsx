"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Shield, Leaf, CheckCircle, Users, Beaker, Sparkles, Stethoscope, TestTube, Pill, Lock, Package, Phone, Calendar } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MediCare Cannabis"
          button={{
            text: "Schedule Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Medical Cannabis Treatment Solutions"
          description="Trusted care for qualified patients. Licensed dispensary offering professional-grade cannabis products with expert guidance and full compliance with state regulations."
          tag="Licensed & Certified"
          tagIcon={Shield}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003656205-bs4tjwbp.jpg"
          imageAlt="Medical cannabis healthcare environment"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "View Products",
              href: "#products"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Professional Medical Cannabis Care"
          description="We provide compassionate, evidence-based cannabis treatment to qualified patients. Our team of healthcare professionals ensures safe, effective, and compliant care."
          tag="About Us"
          tagIcon={Leaf}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Licensed Dispensary",
              description: "Full state compliance and regulatory approval for medical cannabis distribution",
              icon: CheckCircle
            },
            {
              title: "Expert Consultations",
              description: "Work with healthcare professionals to find the right treatment for your condition",
              icon: Users
            },
            {
              title: "Quality Products",
              description: "Carefully sourced, tested products meeting highest medical standards",
              icon: Beaker
            },
            {
              title: "Patient Privacy",
              description: "HIPAA-compliant care with complete confidentiality and discretion",
              icon: Shield
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003657184-nsd5sk4s.jpg"
          imageAlt="Professional medical cannabis clinic"
          imagePosition="right"
          buttons={[
            {
              text: "Schedule Consultation",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Why Choose Our Store"
          description="Comprehensive benefits designed for patient care and satisfaction"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Medical Expertise",
              icon: Stethoscope
            },
            {
              title: "Lab Tested Products",
              icon: TestTube
            },
            {
              title: "Flexible Dosing",
              icon: Pill
            },
            {
              title: "Secure Ordering",
              icon: Lock
            },
            {
              title: "Discreet Delivery",
              icon: Package
            },
            {
              title: "24/7 Support",
              icon: Phone
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Selection of our most trusted medical cannabis products"
          tag="Available Now"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "prod-1",
              name: "Premium CBD Oil",
              price: "$45",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003657997-tas8ub6s.jpg",
              imageAlt: "Premium CBD oil tincture"
            },
            {
              id: "prod-2",
              name: "Medicinal Capsules",
              price: "$55",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003658852-9yr08tn1.jpg",
              imageAlt: "Cannabis medicinal capsules"
            },
            {
              id: "prod-3",
              name: "THC/CBD Extract",
              price: "$65",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003659746-ykez9xlm.jpg",
              imageAlt: "Medical cannabis extract"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Patient Testimonials"
          description="Real stories from patients who trust our care"
          tag="Reviews"
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "test-1",
              name: "Jennifer Morrison",
              role: "Pain Management Patient",
              testimonial: "The staff was incredibly knowledgeable and helped me find the right product for chronic pain management. I feel supported throughout my treatment journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003660940-7d1fbksj.jpg",
              imageAlt: "Jennifer Morrison"
            },
            {
              id: "test-2",
              name: "David Chen",
              role: "Anxiety Relief Patient",
              testimonial: "Professional, discreet, and truly caring. They take time to understand your needs and recommend appropriate solutions. Highly recommend this clinic.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003662327-kqgml7pm.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "test-3",
              name: "Sarah Williams",
              role: "Sleep Support Patient",
              testimonial: "After struggling for years, I finally found relief. The team's expertise in dosing and product selection made all the difference in my recovery.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003663449-7olr8ffo.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "test-4",
              name: "Michael Rodriguez",
              role: "Multiple Condition Patient",
              testimonial: "The consultation process was thorough and respectful. They clearly explained everything and answered all my questions. Best healthcare experience I've had.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003664451-vlakva9a.jpg",
              imageAlt: "Michael Rodriguez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Important information about our services and medical cannabis treatment"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "faq-1",
              title: "Do I need a medical card to purchase?",
              content: "Yes, a valid medical cannabis card or prescription is required. We verify all credentials through state systems to ensure full compliance."
            },
            {
              id: "faq-2",
              title: "What conditions qualify for treatment?",
              content: "Qualifying conditions vary by state but typically include chronic pain, anxiety, PTSD, epilepsy, and multiple sclerosis. Consult with our team about your specific situation."
            },
            {
              id: "faq-3",
              title: "How do consultations work?",
              content: "Initial consultations are personalized sessions where we discuss your condition, treatment goals, and recommend appropriate products with proper dosing guidance."
            },
            {
              id: "faq-4",
              title: "Are your products lab-tested?",
              content: "Absolutely. All products undergo rigorous third-party lab testing for potency, purity, and contaminants to ensure safety and quality."
            },
            {
              id: "faq-5",
              title: "What payment methods do you accept?",
              content: "We accept cash, debit cards, and approved digital payment methods. All transactions are secure and discreet."
            },
            {
              id: "faq-6",
              title: "Is my privacy protected?",
              content: "Yes, we maintain HIPAA compliance and strict confidentiality. Your patient information is never shared without authorization."
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Certifications"
          description="Licensed and certified by industry leaders"
          tag="Verified"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003665397-maer5tuc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003666821-31ovtmcb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003668171-ydrul6fp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003669251-zy482l4n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003670604-yd0zeb9e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003672236-of9wzpfu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003673685-3r47k1nf.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Schedule Your Consultation"
          description="Book an appointment with our healthcare professionals to discuss your medical cannabis treatment options and find the right solution for your needs."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Schedule Now"
          termsText="We respect your privacy. Your information is protected under HIPAA compliance."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="MediCare Cannabis"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Products",
                  href: "#products"
                },
                {
                  label: "Consultations",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "contact"
                },
                {
                  label: "Compliance",
                  href: "/compliance"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}