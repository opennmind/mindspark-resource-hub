export type ResourceCategory = 'course' | 'tutorial' | 'assessment';

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
  // Course Resources
  {
    id: 'course-1',
    title: 'Introduction to Python Programming',
    description: 'A beginner-friendly course covering the fundamentals of Python, from basic syntax to control structures.',
    category: 'course',
    uploadDate: '2025-04-10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542831371-29b0fbad88f4', // Example: Coding related image
    tags: ['python', 'programming', 'beginner'],
    author: {
      name: 'Dr. Eleanor Vance',
      avatarUrl: 'https://i.pravatar.cc/100?img=31',
    },
    detailedInfo: 'This introductory Python course includes interactive exercises, quizzes after each module, and a final project to solidify learning. Topics covered include data types, loops, functions, and basic file handling.'
  },
  {
    id: 'course-2',
    title: 'Web Development Fundamentals with HTML & CSS',
    description: 'Learn the basics of structuring web pages with HTML and styling them with CSS in this foundational course.',
    category: 'course',
    uploadDate: '2025-04-08',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515879236874-6781db9a024b', // Example: Web development image
    tags: ['html', 'css', 'web development'],
    author: {
      name: 'Professor Kenji Tanaka',
      avatarUrl: 'https://i.pravatar.cc/100?img=32',
    },
    detailedInfo: 'This course provides a hands-on approach to building web pages. Students will learn about HTML tags, CSS selectors, the box model, and basic layout techniques through practical exercises and projects.'
  },
  {
    id: 'course-3',
    title: 'The Joy of Data Analysis',
    description: 'Explore the world of data analysis using spreadsheets and basic statistical concepts.',
    category: 'course',
    uploadDate: '2025-04-05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551054348-882952258570', // Example: Data analysis image
    tags: ['data analysis', 'statistics', 'spreadsheets'],
    author: {
      name: 'Aisha Khan',
      avatarUrl: 'https://i.pravatar.cc/100?img=33',
    },
    detailedInfo: 'This course introduces fundamental data analysis techniques using tools like Google Sheets and Excel. Topics include data cleaning, descriptive statistics, data visualization, and interpreting basic statistical results.'
  },
  {
    id: 'course-4',
    title: 'Creative Writing for Beginners',
    description: 'Unleash your inner storyteller with this introductory course to creative writing techniques.',
    category: 'course',
    uploadDate: '2025-04-01',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66', // Example: Writing image
    tags: ['creative writing', 'storytelling', 'beginner'],
    author: {
      name: 'Samuel Dubois',
      avatarUrl: 'https://i.pravatar.cc/100?img=34',
    },
    detailedInfo: 'This course covers the elements of storytelling, including plot, character development, setting, and dialogue. It includes writing prompts and peer feedback sessions to enhance learning.'
  },
  {
    id: 'course-5',
    title: 'Introduction to Graphic Design',
    description: 'Learn the principles of visual communication and basic graphic design tools.',
    category: 'course',
    uploadDate: '2025-03-28',
    thumbnailUrl: 'https://images.unsplash.com/photo-1593720213459-67803ab5eb77', // Example: Graphic design image
    tags: ['graphic design', 'visual communication', 'design'],
    author: {
      name: 'Priya Sharma',
      avatarUrl: 'https://i.pravatar.cc/100?img=35',
    },
    detailedInfo: 'This course introduces the fundamentals of graphic design, including typography, color theory, layout, and image manipulation using accessible design tools.'
  },

  // Tutorial Resources
  {
    id: 'tutorial-1',
    title: 'Setting up Your First Development Environment',
    description: 'A step-by-step tutorial on installing essential software for web development.',
    category: 'tutorial',
    uploadDate: '2025-04-12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-436545a1058f', // Example: Setup guide image
    tags: ['development', 'setup', 'tools'],
    author: {
      name: 'Omar Hassan',
      avatarUrl: 'https://i.pravatar.cc/100?img=36',
    },
    detailedInfo: 'This tutorial guides beginners through installing Node.js, a code editor (like VS Code), and setting up a basic project structure for web development.'
  },
  {
    id: 'tutorial-2',
    title: 'Creating Engaging Presentations',
    description: 'Learn tips and tricks for designing and delivering effective presentations.',
    category: 'tutorial',
    uploadDate: '2025-04-09',
    thumbnailUrl: 'https://images.unsplash.com/photo-1634729248784-41b72399532a', // Example: Presentation skills image
    tags: ['presentations', 'communication', 'skills'],
    author: {
      name: 'Sofia Rodriguez',
      avatarUrl: 'https://i.pravatar.cc/100?img=37',
    },
    detailedInfo: 'This tutorial covers slide design principles, storytelling techniques for presentations, and tips for engaging your audience during delivery.'
  },
  {
    id: 'tutorial-3',
    title: 'Mastering Time Management Techniques',
    description: 'A practical guide to improving your productivity through effective time management strategies.',
    category: 'tutorial',
    uploadDate: '2025-04-06',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88', // Example: Time management image
    tags: ['time management', 'productivity', 'efficiency'],
    author: {
      name: 'Ben Carter',
      avatarUrl: 'https://i.pravatar.cc/100?img=38',
    },
    detailedInfo: 'This tutorial introduces various time management techniques like the Pomodoro Technique, Eisenhower Matrix, and task prioritization methods.'
  },
  {
    id: 'tutorial-4',
    title: 'Introduction to Mind Mapping for Learning',
    description: 'Learn how to use mind maps to organize thoughts, understand concepts, and improve learning efficiency.',
    category: 'tutorial',
    uploadDate: '2025-04-03',
    thumbnailUrl: 'https://images.unsplash.com/photo-1505576399871-c186410b9068', // Example: Mind mapping image
    tags: ['mind mapping', 'learning', 'study skills'],
    author: {
      name: 'Lena Dubois',
      avatarUrl: 'https://i.pravatar.cc/100?img=39',
    },
    detailedInfo: 'This tutorial provides a step-by-step guide on creating effective mind maps for note-taking, brainstorming, and studying complex topics.'
  },
  {
    id: 'tutorial-5',
    title: 'Effective Note-Taking Strategies',
    description: 'Discover different note-taking methods to enhance comprehension and retention of information.',
    category: 'tutorial',
    uploadDate: '2025-03-30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a', // Example: Note-taking image
    tags: ['note-taking', 'study skills', 'learning'],
    author: {
      name: 'Raj Patel',
      avatarUrl: 'https://i.pravatar.cc/100?img=40',
    },
    detailedInfo: 'This tutorial explores various note-taking methods such as Cornell Notes, Sketchnoting, and linear note-taking, highlighting the benefits of each for different learning styles.'
  },

  // Assessment Resources
  {
    id: 'assessment-1',
    title: 'Python Basics Quiz',
    description: 'Test your understanding of fundamental Python concepts covered in the introductory course.',
    category: 'assessment',
    uploadDate: '2025-04-11',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532163973333-b4d1b9329753', // Example: Quiz/test image
    tags: ['python', 'assessment', 'quiz'],
    author: {
      name: 'Dr. Eleanor Vance',
      avatarUrl: 'https://i.pravatar.cc/100?img=31',
    },
    detailedInfo: 'This quiz includes multiple-choice questions covering Python syntax, data types, and basic control flow. Instant feedback is provided upon completion.'
  },
  {
    id: 'assessment-2',
    title: 'HTML & CSS Fundamentals Checkpoint',
    description: 'A short assessment to evaluate your grasp of basic HTML structure and CSS styling.',
    category: 'assessment',
    uploadDate: '2025-04-07',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578849286340-c1a154295cf9', // Example: Web development assessment
    tags: ['html', 'css', 'assessment'],
    author: {
      name: 'Professor Kenji Tanaka',
      avatarUrl: 'https://i.pravatar.cc/100?img=32',
    },
    detailedInfo: 'This checkpoint includes questions on HTML tags, CSS selectors, and the box model. It aims to reinforce the foundational concepts of web development.'
  },
  {
    id: 'assessment-3',
    title: 'Data Analysis Basic Skills Test',
    description: 'Assess your ability to perform basic data manipulation and interpretation.',
    category: 'assessment',
    uploadDate: '2025-04-04',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582053433976-25c005449a74', // Example: Data analysis assessment
    tags: ['data analysis', 'assessment', 'skills'],
    author: {
      name: 'Aisha Khan',
      avatarUrl: 'https://i.pravatar.cc/100?img=33',
    },
    detailedInfo: 'This test involves analyzing a small dataset and answering questions related to descriptive statistics and basic data visualization.'
  },
  {
    id: 'assessment-4',
    title: 'Creative Writing Prompt Challenge',
    description: 'Respond to a creative writing prompt to practice your storytelling skills.',
    category: 'assessment',
    uploadDate: '2025-04-02',
    thumbnailUrl: 'https://images.unsplash.com/photo-1457363193848-b9542193c676', // Example: Writing assessment
    tags: ['creative writing', 'assessment', 'prompt'],
    author: {
      name: 'Samuel Dubois',
      avatarUrl: 'https://i.pravatar.cc/100?img=34',
    },
    detailedInfo: 'This challenge provides a specific scenario and asks participants to write a short story or piece based on the prompt. Submissions may be peer-reviewed.'
  },
  {
    id: 'assessment-5',
    title: 'Graphic Design Principles Quiz',
    description: 'Test your understanding of the core principles of graphic design.',
    category: 'assessment',
    uploadDate: '2025-03-29',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544717305-278247692999', // Example: Graphic design assessment
    tags: ['graphic design', 'assessment', 'principles'],
    author: {
      name: 'Priya Sharma',
      avatarUrl: 'https://i.pravatar.cc/100?img=35',
    },
    detailedInfo: 'This quiz assesses your knowledge of typography, color theory, layout principles, and visual hierarchy in graphic design.'
  }
];

export const upcomingProjects = [
  {
    id: 'project-1',
    title: 'Interactive Python Learning Modules',
    date: '2025-05-15',
    description: 'Development of interactive coding exercises and challenges for the introductory Python course.'
  },
  {
    id: 'project-2',
    title: 'Advanced CSS Layout Techniques Workshop',
    date: '2025-05-22',
    description: 'A hands-on workshop focusing on advanced CSS layout techniques using Grid and Flexbox for responsive designs.'
  },
  {
    id: 'project-3',
    title: 'Data Visualization with Python',
    date: '2025-05-29',
    description: 'A project-based course teaching how to create compelling data visualizations using Python libraries like Matplotlib and Seaborn.'
  },
  {
    id: 'project-4',
    title: 'Short Story Writing Competition',
    date: '2025-06-05',
    description: 'A competition encouraging creative writing through submission of short stories on a given theme.'
  },
  {
    id: 'project-5',
    title: 'Design Thinking for Beginners',
    date: '2025-06-12',
    description: 'An introductory workshop to the principles and process of design thinking for problem-solving and innovation.'
  }
];
