# GambleX

GambleX is an educational web project designed to raise awareness about the dangers and illegality of online gambling, especially aimed at individuals in Korea who unintentionally access gambling websites through pirated webtoon sites.

---

## 🚀 Project Overview

GambleX simulates a realistic gambling website experience, which then redirects visitors to a dedicated educational page highlighting the negative consequences of gambling and offering resources for help.

---

## 📂 Project Files

- **`index.html`**  
  A landing page simulating a real gambling site.

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

Deployment Steps:

Created an S3 bucket with static website hosting enabled.

Configured public access settings to allow website access.

Set up an IAM user with the necessary permissions for automated deployment.

Configured GitHub Actions to deploy changes automatically to S3.

Accessed the website via the S3 static website URL.

---

## ⚠️ Disclaimer

GambleX is purely educational and does not promote gambling in any form. The project aims solely to educate users about the harms associated with gambling and provides resources for assistance.

---

Feel free to contact me for further questions or contributions.
