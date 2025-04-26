
export type ResourceCategory = 'photo' | 'code' | 'survey';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  uploadDate: string;
  thumbnailUrl?: string;
  tags: string[];
  author: {
    name: string;
    avatarUrl: string;
  };
  detailedInfo?: string;
}

export const resources: Resource[] = [
  // Photo Resources
  {
    id: 'photo-1',
    title: 'Professional Portrait Photography Guide',
    description: 'A comprehensive guide on taking professional portraits with any camera. Learn lighting, composition, and post-processing techniques.',
    category: 'photo',
    uploadDate: '2025-04-10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    tags: ['portrait', 'photography', 'lighting'],
    author: {
      name: 'Emma Johnson',
      avatarUrl: 'https://i.pravatar.cc/100?img=1',
    },
    detailedInfo: 'This guide covers advanced portrait photography techniques including natural lighting, studio setup, posing guides, and detailed post-processing workflows in Adobe Lightroom and Photoshop. It includes specific sections for different scenarios such as indoor vs outdoor shoots, group portraits, and professional headshots.'
  },
  {
    id: 'photo-2',
    title: 'Landscape Photography Essentials',
    description: 'Master the art of capturing stunning landscapes. This guide covers equipment, timing, composition, and editing.',
    category: 'photo',
    uploadDate: '2025-04-08',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    tags: ['landscape', 'photography', 'outdoors'],
    author: {
      name: 'Michael Chen',
      avatarUrl: 'https://i.pravatar.cc/100?img=3',
    },
    detailedInfo: 'This comprehensive landscape photography resource covers essential gear selection, the golden hour and blue hour timing techniques, composition rules like the rule of thirds and leading lines, and step-by-step editing tutorials for both mobile and desktop software. Includes special sections on capturing water, mountains, and night sky landscapes.'
  },
  {
    id: 'photo-3',
    title: 'Mobile Photography Tips & Tricks',
    description: 'Transform your smartphone photos from amateur to professional with these expert techniques and apps.',
    category: 'photo',
    uploadDate: '2025-04-05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['mobile', 'photography', 'editing'],
    author: {
      name: 'Sarah Williams',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
    },
    detailedInfo: 'This mobile photography resource includes tips on using your smartphone camera settings effectively, composition techniques specifically for mobile devices, recommended apps for capture and editing with tutorials, and how to overcome common smartphone camera limitations. Features a special section on creating social media-ready images directly from your phone.'
  },
  {
    id: 'photo-4',
    title: 'Product Photography for E-commerce',
    description: 'Learn how to create professional product photos for online stores without expensive equipment.',
    category: 'photo',
    uploadDate: '2025-04-01',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tags: ['product', 'photography', 'e-commerce'],
    author: {
      name: 'David Thompson',
      avatarUrl: 'https://i.pravatar.cc/100?img=7',
    },
    detailedInfo: 'This e-commerce photography guide teaches you how to create a DIY light box, proper lighting setups using affordable equipment, product styling tips for different categories, and post-processing techniques to make products stand out. Includes templates for consistent image sizing across your online store and special instructions for challenging products like jewelry and reflective items.'
  },
  {
    id: 'photo-5',
    title: 'Street Photography: Capturing Urban Life',
    description: 'A guide to candid street photography, including legal considerations, equipment, and techniques.',
    category: 'photo',
    uploadDate: '2025-03-28',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tags: ['street', 'photography', 'urban'],
    author: {
      name: 'Carlos Mendez',
      avatarUrl: 'https://i.pravatar.cc/100?img=9',
    },
    detailedInfo: 'This street photography resource covers the ethics and legal aspects of photographing people in public spaces across different countries, recommended camera settings for quick captures, techniques for being discreet yet effective, and post-processing tips to enhance urban imagery. Includes interviews with renowned street photographers and their approaches to the craft.'
  },
  {
    id: 'photo-6',
    title: 'Food Photography Masterclass',
    description: 'Create mouth-watering food photos for blogs, social media, or menus with these professional techniques.',
    category: 'photo',
    uploadDate: '2025-03-25',
    thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    tags: ['food', 'photography', 'styling'],
    author: {
      name: 'Maria Garcia',
      avatarUrl: 'https://i.pravatar.cc/100?img=11',
    },
    detailedInfo: 'This food photography masterclass covers food styling tricks professionals use, lighting setups for different moods and food types, prop selection and arrangement techniques, and editing workflows specific to food photography. Includes tips on working with challenging foods like ice cream and soups, and how to create steam and other effects naturally.'
  },
  {
    id: 'photo-7',
    title: 'Wildlife Photography Fundamentals',
    description: 'Capture stunning images of animals in their natural habitats. Includes equipment guides and field techniques.',
    category: 'photo',
    uploadDate: '2025-03-22',
    thumbnailUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    tags: ['wildlife', 'photography', 'nature'],
    author: {
      name: 'Robert Wilson',
      avatarUrl: 'https://i.pravatar.cc/100?img=13',
    },
    detailedInfo: 'This wildlife photography resource includes detailed information on telephoto lenses and appropriate gear, wildlife behavior prediction techniques for better shots, camouflage and field safety tips, and post-processing methods specifically for animal subjects. Features sections on bird photography, mammals, and macro photography of smaller creatures.'
  },
  {
    id: 'photo-8',
    title: 'Architectural Photography Guide',
    description: 'Learn to photograph buildings and interiors like a professional. Covers perspective correction and lighting.',
    category: 'photo',
    uploadDate: '2025-03-19',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['architecture', 'photography', 'interiors'],
    author: {
      name: 'Jennifer Lee',
      avatarUrl: 'https://i.pravatar.cc/100?img=15',
    },
    detailedInfo: 'This architectural photography guide explains techniques for correcting perspective distortion in-camera and in post-processing, lighting considerations for interior and exterior shoots, how to handle mixed lighting situations, and tips for showcasing spatial relationships in buildings. Includes walkthroughs of actual professional architectural photography assignments.'
  },
  {
    id: 'photo-9',
    title: 'Night Photography Techniques',
    description: 'Master the challenges of low-light photography, from astrophotography to cityscapes after dark.',
    category: 'photo',
    uploadDate: '2025-03-16',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['night', 'photography', 'long-exposure'],
    author: {
      name: 'Thomas Brown',
      avatarUrl: 'https://i.pravatar.cc/100?img=17',
    },
    detailedInfo: 'This night photography resource covers essential equipment like tripods and remote triggers, techniques for focusing in the dark, exposure calculation methods for different night scenarios, and post-processing workflows to reduce noise and enhance details. Includes specific sections on star trails, the Milky Way, urban night photography, and light painting techniques.'
  },
  {
    id: 'photo-10',
    title: 'Drone Photography Essentials',
    description: 'A beginner\'s guide to aerial photography using consumer drones. Includes legal regulations and flying tips.',
    category: 'photo',
    uploadDate: '2025-03-13',
    thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    tags: ['drone', 'photography', 'aerial'],
    author: {
      name: 'Alex Rodriguez',
      avatarUrl: 'https://i.pravatar.cc/100?img=19',
    },
    detailedInfo: 'This drone photography guide covers different types of consumer drones and their camera capabilities, flight regulations across major countries, flight planning for optimal shots, and post-processing techniques specific to aerial imagery. Includes sections on panorama stitching from drone photos, videography basics, and dealing with weather conditions.'
  },

  // Code Resources
  {
    id: 'code-1',
    title: 'Modern JavaScript Fundamentals',
    description: 'A comprehensive guide to modern JavaScript (ES6+) features and best practices for web development.',
    category: 'code',
    uploadDate: '2025-04-12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['javascript', 'web development', 'programming'],
    author: {
      name: 'Daniel Kim',
      avatarUrl: 'https://i.pravatar.cc/100?img=2',
    },
    detailedInfo: 'This JavaScript guide covers all essential ES6+ features including arrow functions, destructuring, modules, promises, async/await, and more with practical examples. It explains functional programming concepts, provides optimization tips for performance, and includes sections on DOM manipulation, event handling, and modern JavaScript tooling like webpack and Babel.'
  },
  {
    id: 'code-2',
    title: 'React Hooks Masterclass',
    description: 'Master React functional components and hooks with practical examples and best practices.',
    category: 'code',
    uploadDate: '2025-04-09',
    thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['react', 'javascript', 'frontend'],
    author: {
      name: 'Jessica Miller',
      avatarUrl: 'https://i.pravatar.cc/100?img=4',
    },
    detailedInfo: 'This React hooks resource provides in-depth explanations of all built-in hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef) with practical examples. It covers custom hook creation, handling side effects properly, state management patterns, performance optimization techniques, and testing strategies for React components using hooks.'
  },
  {
    id: 'code-3',
    title: 'Python Data Science Toolkit',
    description: 'Essential Python libraries and techniques for data analysis, visualization, and machine learning.',
    category: 'code',
    uploadDate: '2025-04-06',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['python', 'data science', 'machine learning'],
    author: {
      name: 'Andrew Johnson',
      avatarUrl: 'https://i.pravatar.cc/100?img=6',
    },
    detailedInfo: 'This Python data science resource covers pandas for data manipulation with real-world datasets, matplotlib and seaborn for various visualization types, scikit-learn for machine learning model implementation, and data preprocessing techniques. Includes Jupyter notebook tutorials for end-to-end data science workflows and best practices for reproducible research.'
  },
  {
    id: 'code-4',
    title: 'Full-Stack Web Development with MERN',
    description: 'Build complete web applications with MongoDB, Express, React, and Node.js stack.',
    category: 'code',
    uploadDate: '2025-04-03',
    thumbnailUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['mern', 'web development', 'fullstack'],
    author: {
      name: 'Ryan Martinez',
      avatarUrl: 'https://i.pravatar.cc/100?img=8',
    },
    detailedInfo: 'This MERN stack guide walks through building a complete application from scratch covering MongoDB database design and operations, Express.js API development with authentication, React frontend with state management, and Node.js server-side architecture. Includes deployment strategies, testing methodologies, and security best practices for production applications.'
  },
  {
    id: 'code-5',
    title: 'Introduction to GraphQL',
    description: 'Learn how to build and consume GraphQL APIs for more efficient data fetching in web applications.',
    category: 'code',
    uploadDate: '2025-03-30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['graphql', 'api', 'web development'],
    author: {
      name: 'Sophia Chen',
      avatarUrl: 'https://i.pravatar.cc/100?img=10',
    },
    detailedInfo: 'This GraphQL resource explains the benefits over REST APIs, schema definition language basics, resolver implementation, and query/mutation patterns. Covers integration with various backend frameworks, client-side implementation with Apollo Client, authentication strategies, and performance optimization techniques like dataloaders and caching.'
  },
  {
    id: 'code-6',
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile apps with Google\'s Flutter framework and Dart programming language.',
    category: 'code',
    uploadDate: '2025-03-27',
    thumbnailUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['flutter', 'mobile', 'dart'],
    author: {
      name: 'James Wilson',
      avatarUrl: 'https://i.pravatar.cc/100?img=12',
    },
    detailedInfo: 'This Flutter development guide covers Dart language essentials for Flutter, widget-based UI development with material and cupertino design systems, state management approaches (Provider, Bloc, Riverpod), navigation and routing, and accessing device features. Includes sections on animations, custom widget creation, and deploying to both iOS and Android app stores.'
  },
  {
    id: 'code-7',
    title: 'DevOps Practices with Docker and Kubernetes',
    description: 'Implement modern DevOps workflows using containerization and orchestration technologies.',
    category: 'code',
    uploadDate: '2025-03-24',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['devops', 'docker', 'kubernetes'],
    author: {
      name: 'Lisa Wang',
      avatarUrl: 'https://i.pravatar.cc/100?img=14',
    },
    detailedInfo: 'This DevOps resource explains Docker containerization concepts and best practices, Kubernetes architecture and components, implementing CI/CD pipelines with tools like GitHub Actions or Jenkins, and monitoring and logging strategies. Includes practical exercises for deploying applications with varying complexity levels and handling production concerns like scaling and rolling updates.'
  },
  {
    id: 'code-8',
    title: 'Algorithms and Data Structures in JavaScript',
    description: 'Implement common algorithms and data structures with JavaScript. Essential for coding interviews.',
    category: 'code',
    uploadDate: '2025-03-21',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['algorithms', 'data structures', 'javascript'],
    author: {
      name: 'Kevin Park',
      avatarUrl: 'https://i.pravatar.cc/100?img=16',
    },
    detailedInfo: 'This algorithms and data structures resource implements arrays, linked lists, stacks, queues, trees, graphs, and hash tables in JavaScript with detailed explanations. Covers searching, sorting, recursion, dynamic programming, and greedy algorithms with time and space complexity analysis. Includes common coding interview problems with step-by-step solutions and optimization techniques.'
  },
  {
    id: 'code-9',
    title: 'Responsive Web Design Patterns',
    description: 'Create modern responsive layouts using CSS Grid, Flexbox, and media queries for any device.',
    category: 'code',
    uploadDate: '2025-03-18',
    thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['css', 'responsive', 'web design'],
    author: {
      name: 'Olivia Taylor',
      avatarUrl: 'https://i.pravatar.cc/100?img=18',
    },
    detailedInfo: 'This responsive web design resource covers CSS Grid layout for two-dimensional designs, Flexbox for one-dimensional layouts, effective media query breakpoints and strategies, mobile-first design principles, and accessibility considerations for responsive sites. Includes common layout patterns like card grids, holy grail layout, and responsive navigation with working examples.'
  },
  {
    id: 'code-10',
    title: 'Authentication and Security in Web Apps',
    description: 'Implement secure authentication and authorization in your web applications. Covers JWT, OAuth, and more.',
    category: 'code',
    uploadDate: '2025-03-15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['security', 'authentication', 'web development'],
    author: {
      name: 'Michelle Davis',
      avatarUrl: 'https://i.pravatar.cc/100?img=20',
    },
    detailedInfo: 'This web security resource explains session-based vs. token-based authentication implementations, OAuth 2.0 and OpenID Connect flows, password hashing and storage best practices, and common web security vulnerabilities (CSRF, XSS, SQL injection) with prevention techniques. Includes example implementations for popular frameworks and practical security auditing checklists.'
  },

  // Survey Resources
  {
    id: 'survey-1',
    title: 'Effective User Research Methods',
    description: 'Learn how to plan and conduct user research to inform your product development process.',
    category: 'survey',
    uploadDate: '2025-04-11',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['user research', 'UX', 'product development'],
    author: {
      name: 'Amanda Lee',
      avatarUrl: 'https://i.pravatar.cc/100?img=21',
    },
    detailedInfo: 'This user research guide covers different research methodologies including interviews, surveys, usability testing, card sorting, and ethnographic research. It provides recruitment strategies for finding relevant participants, question design techniques to avoid bias, analysis methods for qualitative and quantitative data, and how to transform research insights into actionable product requirements.'
  },
  {
    id: 'survey-2',
    title: 'Customer Satisfaction Survey Templates',
    description: 'Ready-to-use survey templates to measure customer satisfaction across different industries.',
    category: 'survey',
    uploadDate: '2025-04-07',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['customer satisfaction', 'templates', 'business'],
    author: {
      name: 'Brian Johnson',
      avatarUrl: 'https://i.pravatar.cc/100?img=22',
    },
    detailedInfo: 'This customer satisfaction resource provides customizable templates for NPS (Net Promoter Score), CSAT (Customer Satisfaction), and CES (Customer Effort Score) surveys across retail, SaaS, healthcare, hospitality, and financial services industries. Includes question banks for different touchpoints, best practices for timing and distribution, and analysis frameworks for interpreting results and identifying improvement opportunities.'
  },
  {
    id: 'survey-3',
    title: 'Employee Engagement Survey Guide',
    description: 'Measure and improve employee satisfaction and engagement with these survey techniques.',
    category: 'survey',
    uploadDate: '2025-04-04',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['employee engagement', 'HR', 'workplace'],
    author: {
      name: 'Christina Martinez',
      avatarUrl: 'https://i.pravatar.cc/100?img=23',
    },
    detailedInfo: 'This employee engagement guide covers key engagement dimensions to measure (job satisfaction, alignment with company values, growth opportunities, etc.), question design for honest feedback, maintaining anonymity while gathering actionable data, communication strategies before and after the survey, and implementing change based on survey results with case studies of successful interventions.'
  },
  {
    id: 'survey-4',
    title: 'Market Research Survey Techniques',
    description: 'Design effective surveys to understand market trends, customer preferences, and competitive landscape.',
    category: 'survey',
    uploadDate: '2025-04-02',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['market research', 'business', 'strategy'],
    author: {
      name: 'Eric Patterson',
      avatarUrl: 'https://i.pravatar.cc/100?img=24',
    },
    detailedInfo: 'This market research resource explains different survey methodologies (online, phone, in-person) with their advantages and limitations, sampling techniques to ensure representative data, question design for market positioning analysis, pricing research methodologies like Van Westendorp and Gabor-Granger, and competitive analysis frameworks. Includes sections on conducting international market research and analyzing market segmentation.'
  },
  {
    id: 'survey-5',
    title: 'Website Usability Testing Toolkit',
    description: 'Tools and methodologies to evaluate and improve the usability of your website or application.',
    category: 'survey',
    uploadDate: '2025-03-29',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['usability', 'UX', 'web design'],
    author: {
      name: 'Nicole Taylor',
      avatarUrl: 'https://i.pravatar.cc/100?img=25',
    },
    detailedInfo: 'This usability testing toolkit provides task scenario design techniques, moderated vs. unmoderated testing methodologies, remote testing tools and software options, metrics for measuring usability (completion rates, time on task, error rates), and heatmap and session recording analysis guidance. Includes templates for testing plans, participant screeners, and report frameworks.'
  },
  {
    id: 'survey-6',
    title: 'Product Feedback Survey Best Practices',
    description: 'Gather actionable feedback from users to improve your product with these survey strategies.',
    category: 'survey',
    uploadDate: '2025-03-26',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['product feedback', 'customer feedback', 'product management'],
    author: {
      name: 'Mark Williams',
      avatarUrl: 'https://i.pravatar.cc/100?img=26',
    },
    detailedInfo: 'This product feedback resource covers in-app survey implementation techniques, survey timing strategies (after specific actions, based on usage patterns), question formulation to generate actionable insights, feature prioritization frameworks based on feedback, and creating closed-loop feedback systems. Includes sections on handling negative feedback constructively and identifying your product\'s promoters and detractors.'
  },
  {
    id: 'survey-7',
    title: 'Educational Assessment Design',
    description: 'Create effective assessments to measure learning outcomes in educational settings.',
    category: 'survey',
    uploadDate: '2025-03-23',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['education', 'assessment', 'learning'],
    author: {
      name: 'Laura Johnson',
      avatarUrl: 'https://i.pravatar.cc/100?img=27',
    },
    detailedInfo: 'This educational assessment guide covers question types for different learning objectives (multiple choice, open-ended, performance-based), Bloom\'s taxonomy application in assessment design, formative vs. summative assessment strategies, technology integration for assessment delivery and analysis, and accommodating diverse learning needs. Includes sections on preventing cheating and measuring higher-order thinking skills.'
  },
  {
    id: 'survey-8',
    title: 'Healthcare Patient Experience Surveys',
    description: 'Measure and improve patient satisfaction in healthcare settings with specialized survey methods.',
    category: 'survey',
    uploadDate: '2025-03-20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['healthcare', 'patient experience', 'medical'],
    author: {
      name: 'Dr. Samuel Green',
      avatarUrl: 'https://i.pravatar.cc/100?img=28',
    },
    detailedInfo: 'This healthcare survey resource covers HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems) and other standardized patient experience measures, survey timing considerations for different care settings, sensitive question design for healthcare contexts, regulatory compliance in patient surveys, and strategies for improving response rates among different patient demographics.'
  },
  {
    id: 'survey-9',
    title: 'Social Science Research Survey Methods',
    description: 'Academic survey methodologies for social science research and studies.',
    category: 'survey',
    uploadDate: '2025-03-17',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['social science', 'research', 'academic'],
    author: {
      name: 'Dr. Elizabeth Harper',
      avatarUrl: 'https://i.pravatar.cc/100?img=29',
    },
    detailedInfo: 'This academic survey methods guide covers research question formulation, hypothesis testing through survey design, quantitative vs. qualitative question development, sampling methodologies for different population types, ethical considerations including informed consent, and statistical analysis techniques for survey data. Includes sections on controlling for bias and ensuring research validity and reliability.'
  },
  {
    id: 'survey-10',
    title: 'Event Feedback Survey Templates',
    description: 'Collect valuable feedback from attendees to improve future events and conferences.',
    category: 'survey',
    uploadDate: '2025-03-14',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['events', 'feedback', 'planning'],
    author: {
      name: 'Rachel Adams',
      avatarUrl: 'https://i.pravatar.cc/100?img=30',
    },
    detailedInfo: 'This event feedback resource provides templates for pre-event, during-event, and post-event surveys, question sets for different event types (conferences, workshops, webinars, social gatherings), measurement frameworks for different aspects (content quality, speaker effectiveness, logistics, networking opportunities), distribution strategies for maximizing response rates, and analysis techniques for improving future events.'
  }
];

export const upcomingProjects = [
  {
    id: 'project-1',
    title: 'Photography Masterclass Series',
    date: '2025-05-15',
    description: 'A comprehensive 8-part series covering advanced photography techniques from professional photographers.'
  },
  {
    id: 'project-2',
    title: 'Frontend Development Bootcamp',
    date: '2025-05-22',
    description: 'An intensive coding bootcamp focused on modern frontend technologies including React, Vue, and Angular.'
  },
  {
    id: 'project-3',
    title: 'UX Research Methods Workshop',
    date: '2025-05-29',
    description: 'Learn practical user research techniques to improve product design decisions and outcomes.'
  },
  {
    id: 'project-4',
    title: 'Data Science Learning Path',
    date: '2025-06-05',
    description: 'A structured learning path for aspiring data scientists covering Python, statistics, and machine learning.'
  },
  {
    id: 'project-5',
    title: 'Photography Challenge',
    date: '2025-06-12',
    description: 'A 30-day challenge with daily assignments to improve your smartphone photography skills.'
  }
];
