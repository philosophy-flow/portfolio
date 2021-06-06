import felineFinderImg from '../../assets/project-images/feline-finder-img.png';
import signUpImg from '../../assets/project-images/signup-form-img.png';
import pricingCompImg from '../../assets/project-images/interactive-pricing-component-img.png';
import crowdfundingProduct from '../../assets/project-images/crowdfunding-product-img.png';
import bookFinder from '../../assets/project-images/book-finder-img.png';
import chatter from '../../assets/project-images/chatter-app-img.png';
import quizApp from '../../assets/project-images/quiz-app-img.png';
import todoList from '../../assets/project-images/to-do-app-img.png';
import jobFilter from '../../assets/project-images/job-filter-img.png';
import meetLandingPage from '../../assets/project-images/meet-landing-page-img.png';
import podLandingPage from '../../assets/project-images/pod-landing-page-img.png';
import typemasterLandingPage from '../../assets/project-images/typemaster-img.png';


export const projects = [
  {
    name: 'FelineFinder',
    img: felineFinderImg,
    description: 'A landing page for an application that specializes in finding friends for your cat. The page is responsive and demonstrates the power of Bootstrap, including the grid system and the carousel feature.',
    demoLink: 'https://philosophy-flow.github.io/felinefinder/',
    repoLink: 'https://github.com/philosophy-flow/felinefinder'
  },
  {
    name: '"Meet" Landing Page',
    img: meetLandingPage,
    description: 'A mobile first, fully responsive landing page for an app named Meet. Two breakpoints were created to strategically compliment the content, and a small amount of JavaScript was used to implement a simple scroll button and download modal. Care was taken to ensure that smooth scrolling and CSS transitions were applied across devices to maximize UX.',
    demoLink: 'https://philosophy-flow.github.io/meet-landing-page/',
    repoLink: 'https://github.com/philosophy-flow/meet-landing-page'
  },
  {
    name: 'Adaptive Signup Form',
    img: signUpImg,
    description: 'A responsive sign up form built using CSS grid. It demonstrates the power and simplicity of the grid system and also features basic front end validation using JavaScript.',
    demoLink: 'https://philosophy-flow.github.io/intro-component-with-signup-form-/',
    repoLink: 'https://github.com/philosophy-flow/intro-component-with-signup-form-'
  },
  {
    name: '"Pod" Landing Page',
    img: podLandingPage,
    description: 'A mobile first, fully responsive landing page for an app named Pod. Multiple breakpoints were created to strategically compliment the content, and special attention was paid to tablet displays. A small amount of JavaScript was utilized to create custom email validation for the form.',
    demoLink: 'https://philosophy-flow.github.io/pod-request-landing-page/',
    repoLink: 'https://github.com/philosophy-flow/pod-request-landing-page'
  },
  {
    name: 'Custom Pricing Component',
    img: pricingCompImg,
    description: 'An interactive pricing component that features a customized range bar and toggle button by utilizing CSS pseudo selectors. Functional programming concepts are used to manage state based on the slider bar value and whether or not a discount is applied.',
    demoLink: 'https://philosophy-flow.github.io/interactive-pricing-component/',
    repoLink: 'https://github.com/philosophy-flow/interactive-pricing-component'
  },
  {
    name: 'Product Landing Page',
    img: typemasterLandingPage,
    description: 'A mobile first, fully responsive landing page for a product. Breakpoints were created to strategically compliment the content, and a combination of negative margins and absolute positioning techniques were utilized to position certain elements.',
    demoLink: 'https://philosophy-flow.github.io/typemaster-landing-page/',
    repoLink: 'https://github.com/philosophy-flow/typemaster-landing-page'
  },
  {
    name: 'Crowdfunding Product Page',
    img: crowdfundingProduct,
    description: 'An interactive crowdfunding product sign up page built with vanilla JavaScript. The user is able to select a reward type or simply back the project. After making a selection, a modal appears that then allows the user to specify a donation amount. The total amount raised, the number of backers, the number of reward items, and the progress bar are updated accordingly.',
    demoLink: 'https://philosophy-flow.github.io/crowdfunding-product-page/',
    repoLink: 'https://github.com/philosophy-flow/crowdfunding-product-page'
  },
  {
    name: 'Book Finder',
    img: bookFinder,
    description: 'An application that uses the Google Books API to retrieve information related to the user\'s input. Title information, author information, a picture of the book, a snippet of the book\'s description, and a link to more information is displayed. Flexbox was used to position the result cards, and CSS grid was used to position the content within each card. The fetch API is used to make requests.',
    demoLink: 'https://philosophy-flow.github.io/book-finder/',
    repoLink: 'https://github.com/philosophy-flow/book-finder'
  },
  {
    name: 'Chatter',
    img: chatter,
    description: 'A React chat application built with Firebase Authentication and Realtime Database. Users can create an account and chat with other users. A presence system also allows everyone to see who else is online at any given time. This project features higher order components, routing, and extensive interaction with a BaaS.',
    demoLink: 'https://chatter-app-7.netlify.app/',
    repoLink: 'https://github.com/philosophy-flow/chatter'
  },
  {
    name: 'Pick a Quiz',
    img: quizApp,
    description: 'A React application that allows the user to select from multiple categories and then take a trivia quiz. After answering all questions the user is able to see their score and view all of the missed questions and correct answers. Animations were done via Framer Motion, and quiz data was retrieved from Open Trivia DB.',
    demoLink: 'https://pickaquiz.netlify.app/',
    repoLink: 'https://github.com/philosophy-flow/pick-a-quiz'
  },
  {
    name: 'To Do List w/ Theme Selector',
    img: todoList,
    description: 'A React to-do list application that features the ability to categorize items based upon whether or not they have been completed; furthermore, items can be deleted individually, and all completed items can be deleted at once. The application also features a light/dark theme selector, and data is persisted via the browser\'s local storage.',
    demoLink: 'https://react-to-do-application.netlify.app/',
    repoLink: 'https://github.com/philosophy-flow/to-do-app'
  },
  {
    name: 'Job Listing Filter',
    img: jobFilter,
    description: 'A React application that displays a list of job opportunities, allowing the user to select multiple filter criteria. The user is also able to remove individual filters or clear all selected filters. A complex implementation of the filter array method is utilized to compare initial listing data to the filter object.',
    demoLink: 'https://react-job-filter-app.netlify.app/',
    repoLink: 'https://github.com/philosophy-flow/react-job-filter'
  },
]
