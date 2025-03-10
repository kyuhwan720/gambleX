# GambleX

GambleX is an educational web project designed to raise awareness about the dangers and illegality of online gambling, especially aimed at individuals in Korea who unintentionally access gambling websites through pirated webtoon sites.

---

## 📸 Why did I decide to do this project?

![](/gamblingsites.PNG)

A significant issue is that many pirated webtoon websites host advertisements for illegal gambling platforms. These banners are designed to lure unsuspecting users into gambling activities, often using deceptive promotions and enticing visuals. To raise awareness of this issue, GambleX includes screenshots of such banners to demonstrate how these gambling sites infiltrate everyday browsing experiences. By highlighting these examples, the project aims to educate users on recognizing and avoiding such deceptive advertisements.

---

## 🚀 Project Overview

GambleX simulates a realistic gambling website experience, which then redirects visitors to a dedicated educational page highlighting the negative consequences of gambling and offering resources for help.

---

## 📂 Project Files

- **`index.html`**  
  A landing page simulating a real gambling site's login page.

- **`illegal.html`**  
  An educational page about gambling's risks and hotline contacts for support.

- **`script.js`**  
  Manages visitor counting and automatic redirection from the login form.

- **`style.css`**  
  Contains styling to ensure a professional appearance.

---

## 🛠️ How it Works

1. Visitors land on a simulated gambling site.
2. Upon attempting to log in or sign up, users are redirected to an educational notice page.
3. The notice page details the harmful consequences of gambling and provides immediate resources for support.

---

## 🌐 Hosting on AWS

This project is deployed using AWS S3 Static Website Hosting with an automated CI/CD pipeline using GitHub Actions.

Diagram (I know it's bad but I hope you get the concept): 

![](/gambleX.drawio.png)

Deployment Steps:

1. Created an S3 bucket with static website hosting enabled.
2. Configured public access settings to allow website access.
3. Set up an IAM user with the necessary permissions for automated deployment.
4. Configured GitHub Actions to deploy changes automatically to S3. 
5. Accessed the website via the S3 static website URL.

---

## 🔜 Future Improvements

Here are some ideas I have in mind:

1️⃣ **Improve AWS Deployment**

- Use CloudFront for faster content delivery.
- Set up Amazon Route 53 to use a custom domain instead of the S3 URL.
- Enable AWS WAF (Web Application Firewall) to block unwanted traffic.
- Implement AWS Certificate Manager (ACM) for free SSL/TLS encryption with HTTPS.
- Use Amazon CloudWatch for monitoring website traffic and detecting unusual activity.
- Automate deployments with AWS CodePipeline for a more robust CI/CD workflow.
- Store logs in Amazon S3 or CloudWatch Logs to analyze visitor behavior and security events.

2️⃣ **Expanding Awareness & Law Enforcement Collaboration**

- Explore ways to embed GambleX within pirated webtoon sites to educate users where they are most vulnerable.
- Work on ethical and legal strategies to expose illegal gambling operations.
- Potentially collaborate with authorities to report and track gambling sites operating illegally.
- Use targeted awareness campaigns (ads, SEO, or social media) to reach users searching for gambling content.

3️⃣ **Implement a Contact Form** 

- Let users report illegal gambling sites they find.
  
---

## ⚠️ Disclaimer

GambleX is purely educational and does not promote gambling in any form. The project aims solely to educate users about the harms associated with gambling and provides resources for assistance.

---

Feel free to contact me for further questions or contributions.
