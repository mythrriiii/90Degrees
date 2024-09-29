# 90°

90° is a user-friendly app designed to help you take the perfect photo every time. Whether you're snapping full-body or half-body shots, 90° uses AI-powered angle detection and real-time guidance to ensure your photographer captures you exactly how you want. With customizable preferences and intuitive guidelines, anyone can take the perfect shot without endless explanations. Say goodbye to bad photos and hello to picture perfection with 90°!

## 📑Table of Contents
- [💁Meet the Team](#meet-the-team)
- [📍The Problem](#the-problem)
- [🛠️The Solution](#the-solution)
  - [🤖What is 90°?](#what-is-90°)
  - [📝What is the process?](#what-is-the-process)
  - [🧠Why does it work?](#why-does-it-work)
  - [✏️Design Thinking Process](#Design-Thinking-Process)
- [🔌The Tech](#the-tech)
  - [🖥️Backend](#backend)
  - [🖱️Frontend](#frontend)
  - [📊MATLAB](#matlab)
- [💢Challenges](#challenges)
- [🎨Ex: Drawing](#ex-drawing)
- [💰Ex: Financial Goals](#ex-financial-goals)
- [🚀Try it Out](#try-it-out)
- [🎯Target Audience](#target-audience)
- [🚀Future Prospects](#future-prospects)

  
## 💁Meet the Team
-**Andy Vo** (role)

role

-**Katniss Min** (role)

role

-**Leo Zheng** (role)

role

-**Mythri Muralikannan** (role)

role
  
## 📍The Problem
Ever dread having to take pictures because people can never seem to get your angles right? You hand over your phone, spend ages just explaining how you want things to be, treading the line between instructions and being ungrateful, just to end up with 258 terrible pictures in your photo gallery. Not one perfect picture.

We are here to help you always capture your right angles. 

## 🛠️The Solution
Use 90° to upload your favourite photos, get guidelines when taking photos, and end up with the perfect photos!

### 🤖What is 90°?
90° is an app that provides innovative photo solutions, allowing people to take the perfect photos based on the perfect angles.

### 📝What is the process?
The app interface is pretty straightforward and super user-friendly. Let's break it down step by step:

**Create an account:** Start by downloading our app and creating an account with your email.

**Create a goal:** Define your specific goal. Give it a brief description, categorize it, and decide on your start and end dates. While the default is a month, you can customize the timeframe. We also suggest adding mini milestones to break down big challenges into smaller ones.

**Specific your end goal:** If you have a specific end goal like drawing a fox, upload a reference. This helps the app calculate your progress as a percentage. Otherwise, your completion percentage is based on how close you are to the end date. It's a great way to measure your advancement mathematically.

**Take a picture on the app every day:** Take a daily picture using the app, capturing your progress on your goal, and upload it to maintain your daily streak.

**Share your process with friends:** Post your daily updates and check out how your friends are doing. Seeing their progress and taking small steps together will keep you motivated. It's like having a social media feed on your homepage.

**Have streaks with your friends:** Your friends become your accountability partners. Keep streaks with them to ensure you stay on track every day.

**Analyze your stats:** The app rewards you with achievements, and you can review your stats on your profile.

**Look back at your journal:** Look at little timelapse videos that have the memories of the process from your journal entries. They'll show you just how far you've come on your journey.


### 🧠Why does it work?
So how does Milestone answer these [Problems](#why-do-people-not-achieve-their-goals)?

**Continuous Motivation:** Staying dedicated to your goal is incredibly motivating. Consistently working on it turns it into a habit, and you'll steer clear of that sluggish feeling. 

**Quantifiable Results:** Your progress is crystal clear. The app calculates the percentage of your goal completion, which serves as a motivating yardstick to keep you on the right track. Plus, your time-lapse video can helps too.  

**Accountability Partner:** The app plays the role of your personal accountability partner, making sure you maintain those daily streaks. And you've got your friends right there through the app to cheer you on.

**Efficient Planning:** Going in circles won't cut it. You need a clear roadmap to reach your goal. When you hit those moments of uncertainty, check the milestones along the way to know exactly where you stand and stay on course.

You've got this, and your goals are well within reach!


### ✏️Design Thinking Process
We followed the Design Thinking Process throughout this process in order to have a clear method for what we were doing. 

**1. Empathize:** Being part of the target audience allowed us to easily step into the shoes of our app's users. We delved into articles and sought out different perspectives to better understand their needs.

**2. Define:** Users need to set clear and specific goals while inculcating a habit of daily steps.

**3. Ideate:** We keep a journal of our daily activities. When we look back at entries from way back, it's like a blast from the past. You can't help but feel a sense of accomplishment when you see how much you've grown. So, why not do the same for your goals? Write down the memories of your journey and watch your progress unfold.

**4. Prototype:** To turn this idea into a tangible solution, we created a digital prototype of the app. This interactive model allowed us to visualize how users would track their daily steps, set goals, and document their progress. It provided a hands-on experience for testing and refining our concept.

**5. Test:** To ensure our app met the needs and expectations of our target users, we will conduct tests. We will gather feedback from a diverse group of potential users, observing how they interact with the prototype. Their input will help us identify areas for improvement, refine the user experience, and fine-tune the app's features. Through multiple testing cycles, we iteratively enhanced the app's usability and functionality, ensuring it truly served its purpose.

## 🔌The Tech
### 🖥️Backend
In the development of our back end, we leveraged the powerful combination of React-Native and Expo, showcasing our dedication to staying at the forefront of modern software development practices.

React-Native, renowned for its versatility and cross-platform capabilities, allowed us to build a mobile application that is not only user-friendly but also efficient. Its component-based structure and extensive library of pre-built components expedited the development process, enabling us to create a seamless user experience.

Expo, on the other hand, played a pivotal role in streamlining our development workflow. This comprehensive framework provided a range of essential tools and services, making the development and deployment of our application a smooth and efficient process. It allowed us to focus on crafting the best user interface and experience possible, while Expo handled many of the technical intricacies.

The database is backed up on the Google Cloud. The language we used is JavaScript and used VSCode to collaborate. Our backend server was Node.js.

### 🖱️Frontend
Our front end comprised two distinct components: Figma and React Native.

In Figma, we crafted a prototype to visualize the app's design, focusing on branding and personal toolkit elements. React Native then materialized this prototype into our fully functional app.

### 📊MATLAB
MATLAB is what we used for Image Processing and creating the video. Here are the steps we used. 

- Pull the data in from the cloud
- Process the images
  - Scale brightness
  - Add a filter to remove noise
  - Resize the images to fit in the frame
  - Blend the images for a smooth transition between the pictures.
  - Add some background music
- Upload the video back onto Google Cloud

Additionally, we intended to utilize MATLAB for:

- Assessing picture similarity to a reference end goal.
- Providing user statistics within the app.

## 💢Challenges
Throughout our journey in the hackathon, our primary challenge was centered on our limited experience with app development. For most of our team, this marked our first foray into the intricacies of React and Expo, and the process of troubleshooting presented a considerable learning curve as we weren't proficient at interpreting the various error messages. 

Another significant obstacle was the transition from our Figma model screens to actual app development. We quickly discovered that it wasn't as straightforward as we initially thought. This process demanded a deep understanding of various complex functionalities, including creating a user-login screen connected to a database, implementing camera features, and crafting reusable components tailored to specific user needs, among other aspects.

Trying to find a way to convert the images into a video was another challenge. It wasn't as easy as it seemed. Integrating MATLAB and the Backend seemed to be a huge challenge as we needed a new API. 

The time crunch and the lack of sleep really did get to us towards the end but we were able to come through and deliver.

## 🎨Ex: Drawing
Here's our generated Video from running the MATLAB Code on the screenshots created with screenshots of [someone's](https://www.youtube.com/watch?v=mF81VV7FAmk) drawings over the years. You can distinctly see the progress being made. 

[Video](https://drive.google.com/file/d/15N9eYZr5UbWsADjCJ5rBopxVTyhmvTEt/view?usp=sharing)

## 💰Ex: Financial Goal
In our forward-thinking strategy, we are actively preparing to introduce a financial goal feature that aims to enhance financial literacy. This initiative involves creating a comprehensive goal that will provide users with valuable resources, such as instructional videos and practical tips, to foster budgeting skills and financial knowledge. Additionally, we are dedicated to closely monitoring and tracking users' progress in this financial goal, ensuring they receive the necessary support and guidance throughout their journey to financial literacy.

Users will have the ability to track their individual goals, like saving up to reach a specific amount in their bank account. This feature encourages the habit of saving, especially now that it offers a clear pathway and motivation. Saving a 5$ a day doesn't seem like much. But when you see your results over a month can show you that you saved 150$ Now that's quite the sum and sure enough $5 a day doesn't sound as  motivating as 150$ a month which can become 1800$ a year!

Furthermore, users can also collaborate with friends to create group goals, such as saving up for a new couch. They can split the target amount as they see fit and then upload it to our platform. By doing this, a commitment is made, and all parties involved are accountable for meeting the goal. The transparency provided by our app for group goals is innovative and addresses a common challenge faced by friend groups when they want to invest in something together.

In addition to goal-setting, our app allows users to keep track of their personal budgets and weekly expenditures. For instance, if someone aims to spend less than $200 per week, they can easily upload their daily expenses. The statistics and analysis provided by the app can offer valuable insights into where and how to make better financial decisions.



## 🚀Try it Out
Here's a link to our Figma prototype:
https://www.figma.com/proto/wTVtBTPLLrAr7wW7i9fcLm/Milestone?type=design&node-id=16-19&t=SCwc9EONcPKIQpKZ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A19&mode=design

If you want to run this yourself, clone the repository and run "npm install" in the server and app directories.
You can run the mobile app with "npm run start" and the server with "npm run dev."
For the server to work, you will likely need to create your own firebase project and link it with a JSON certificate.


## 🎯Target Audience
Our app is meant for anyone and everyone who wants to set goals for themselves. The user interface is easy to interact with and we are looking at adding accessibility components.

## 🚀Future Prospects
- **Accessibility:** We want to make our app accessible to people hard of hearing and sight. Since we aim to include anyone and everyone in our target audience.
- **Have better algorithms to calculate goal completion:** We were looking at using AI Models for pattern analysis and training them with data sets to calculate goal completion.
- **Leaderboard:** Each task gets you points and you get on a leaderboard with your friends. The competitiveness combined with the commitment that you have made creates the perfect accountability partner for your goals.

