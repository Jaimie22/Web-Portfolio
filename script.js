
// ----- PAGES THAT AREN'T BUILT YET -----
const PLACEHOLDERS = {
  "about": {
    number: "01",
    title: "About",
    text: "Coming soon."
  },
  "personal-projects": {
    number: "02",
    title: "Personal Projects",
    text: "Coming soon."
  }
};

// ----- EDUCATIONAL WORK: UNIVERSITY PROJECTS -----
// cover: the card's background image.
// module: optional, e.g. "Year 2 · Game Design". Leave "" to hide it.
// gallery: what opens when the card is clicked, in this order.
//   Screenshot:  { src: "path", caption: "..." }
//   YouTube:     { youtube: "VIDEO_ID", caption: "..." }
//   Video file:  { video: "path.mp4", poster: "path.png", caption: "..." }
const UNIVERSITY_PROJECTS = [
  {
    title: "R.E.M - A game of Dreams",
    status: "In planning",
    module: "",
    description: "A cube-world puzzle game themed around REM sleep.",
    cover: "assets/REMFrontCover.png",
    gallery: [
      { src: "assets/gallery/rem/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/rem/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/rem/03.png", caption: "Screenshot 3" }
    ]
  },
  {
    title: "Awesome Defence Force",
    status: "In planning",
    module: "",
    description: "A 2.5D turn-based strategy game that combines all the cliche and cheese of a typical 80's soldier action game. AWESOME!",
    cover: "images/awesome-defence-force.jpg",
    gallery: [
      { src: "assets/gallery/awesome-defence-force/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/awesome-defence-force/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/awesome-defence-force/03.png", caption: "Screenshot 3" }
    ]
  }
];

// EDUCATIONAL WORK: BLOGS
// In any text you can use <em>italics</em> and <strong>bold</strong>.
// sources: listed at the end. Each is { text: "...", link: "..." }.
const EDUCATIONAL_BLOGS = [
  {
    title: "Blog 1 - Creating a good online presence. Why does it matter?",
    date: "2026-09-18",
    cover: "assets/Blogs/JohnCenaCantSeeMe.jpg",
    intro: "How can they know what they can't see!",
    content: [
      "A million reasons can spring to mind almost instantly. Having a good online presence could mean the difference between your dream job and a dead end. Between your dream client and a dead end. You can see where im going with this. Making yourself shine online, is about as good as it gets. Everyone uses the big WWW, therefore, everyones watching!",
      { heading: "A few aspects to consider?" },
      "Visibility :",
      "You wanna get the dream job, at the big dev compnay right? How are these people gonna know you, if they cant see you! And/or, see the magnum opus you've spent blood, sweat, and tears, and potentialy years making? Creating a well polished online presence, is a great way to get your work out there, and seen by the right people. You can use social media, and/or a website to showcase your work, and make yourself known.",
      "Credibility :",
      "Much in the same fashion as visibility, credibility is a big factor in getting your work seen. If you have a well polished online presence, it shows that you care about your work, and that you're serious about your craft. It also shows that you're willing to put in the time and effort to make yourself look good, and that you're willing to put in the time and effort to make your work look good. All of which we know your potential future boss has to know. If you look good, you'll make them look good, to be as blunt!",
      "Networking opportunities :",
      "Having a good online presence can also open up networking opportunities. If you're active on social media, and/or have a website, you can connect with other professionals in your field, and potentially collaborate on projects. You can also use your online presence to connect with potential clients, and/or employers. The more people that see your work, the more opportunities you'll have to network, and potentially get your work seen by the right people.",
      { heading: "How to Shine! What stands you apart?" },
      "The best way to stand out, is to be yourself. Be authentic, and be genuine. Don't try to be someone you're not, or try to be something you're not. Be true to yourself, and be true to your work. If you do that, you'll stand out from the crowd, and you'll make a name for yourself.",
      "On the subject of work?, have a strong portfolio, and make sure it's up to date. Show your best work, and make sure it's easy to navigate. Make sure your portfolio is easy to find, and make sure it's easy to contact you. Employers dont have time to peruse everyones work. Concise, clear, and well focused. This is what you must abide by to stand out.",
      "At your own leisure, if you wish, My work(as currently limited as it may be!) is available on this website to view. i currently have a few projects in the works now, and Ill be updating my portfolio regularly!",
      {
        image: "assets/Blogs/JohnCenaCantSeeMe.jpg",
        caption: "John Cena's trademark \"you can't see me\" hand gesture.",
        credit: "WWE - World Wrestling Entertainment",
      },
      {
        quote: "There is an intelligent way to eat a live frog - Sun Tzu",
        cite: "https://www.azquotes.com/author/19687-Sun_Tzu"
      },
      " The quote above, references the principles taught by Sun Tzu. An historic figure in war strategy. In its essence it means, If you know the enemy and know yourself, you need not fear the result of a hundred battles. Know your strengths, know your target, and make yourself visible!",
    ],
    sources: [
      {
        text: "Unicus Marketing 2025, The Importance of a Strong Online Presence in Today’s Digital World.",
        link: "https://www.unicusmarketing.com/post/the-importance-of-a-strong-online-presence-in-todays-digital-world/"
      },
      {
        text: "Roger Blikkberget, CEO Viladomat Group 2024.",
        link: "https://www.linkedin.com/pulse/building-powerful-online-presence-why-matters-how-achieve-ukvef/"
      },
    ]
  },
  {
    title: "Blog 2 - Does the concept of professionalism, apply to the Creative industry?",
    date: "2026-09-25",
    cover: "assets/Blogs/Professionalism.png",
    intro: "It really matters! Here's why!",
    content: [
      "The best way we can look at this, is to imagine four well carved pillars, holding up a roof. The roof is called \"professionalism\", and each of the supporting pillars, have a name, and a meaning. Without any one, or all of these pillars, The roof is sure to collapse, much as you would without these attributes, that will help support you in your development. And they are! : ",
      { heading: "A few aspects to consider?" },
      "Commitment :",
      "Despite any obstacle that may greet you, you still agree to complete the project, and when you say you will. This shows everyone, and even you that with a level head, and a willingness to put in the best possible effort, you can achieve great success, and keep potential employers/clients happy, as they then know you're the person to best trust!",
      "Integrity :",
      "With a strong sense of Intgrity, you will be able to make the right decisions, and do the right thing, even when no one is watching. This is a very important aspect of professionalism, as it shows that you can be trusted to do the right thing. It also shows that you have a strong moral compass, and that you are willing to stand up for what you believe in.",
      "Responsibility :",
      "Taking responsibility for your actions is a key component of professionalism. It means that you are committed to doing what is right, and that you are willing to face the consequences of your decisions. This shows that you are reliable and trustworthy, and that you are committed to excellence in your work.",
      "Accountability :",
      "Being accountable means that you take responsibility for your actions, and that you are willing to admit when you are wrong. This is a very important aspect of professionalism, as it shows that you are willing to learn from your mistakes, and that you are willing to take the necessary steps to correct them.",
      "And there it is! the four pillars of professionalism. Living religiously by these principles throughout your career, will help you to achieve great success, and will help you to build a strong reputation in the industry. It will also help you to build strong relationships with your colleagues, and will help you to build a strong network of contacts. All of which are very important in the creative industry, as it is a very competitive field, and having a strong reputation, and a strong network of contacts, can be the difference between success and failure.",
      {
        image: "assets/Blogs/Professionalism.png",
        caption: "The 4 pillars of professionalism, as defined by the Creative Professionals Association.",
        credit: "AI generated image.",
      },
      {
        quote: "The general who wins the battle, makes many calculations in his temple, before the battle is fought. - Sun Tzu",
        cite: "https://www.azquotes.com/author/19687-Sun_Tzu"
      },
      " The quote above, references the principles taught by Sun Tzu. An historic figure in war strategy. In its essence it means, If you plan wisely, remain unfalterd, and have a strong willingness to succeed, you will!",
    ],
    sources: [
      {
        text: "David @ dev.to 2025, Does the concept of professionalism apply to the creative industries?",
        link: "https://dev.to/fedavid/does-the-concept-of-professionalism-apply-to-the-creative-industries-7k6"
      },
      {
        text: "Roger Blikkberget, CEO Viladomat Group 2024.",
        link: "https://www.linkedin.com/pulse/building-powerful-online-presence-why-matters-how-achieve-ukvef/"
      },
    ]
  },
  {
    title: "Blog 3 - Is freelancing a garunteed road to success?",
    date: "2026-10-02",
    cover: "assets/Blogs/FreeLancer.png",
    intro: "Is life at the top of the tree your ambition?",
    content: [
      "Im pretty sure at one point or another, we've all thought about being our own bosses, Being the man! in a manner of speaking. While thats great, it's not everyone that actually thinks of every step, and what it actually takes to become a successful freelancer.",
      { heading: "The current Industry condition" },
      "According to big names such as, PCGamer, and Game Developer, the gaming industry is a very competitive field, and it's not for everyone. The industry is constantly changing, and it's not always easy to keep up with the latest trends. It's also not always easy to find work, and it's not always easy to make a living. It's a very competitive field, and it's not for everyone.",
      "As an example, were you aware that, according to the GDC 2026 State of the Game Industry report, one in four developers have been laid off over the past two years? So talking numbers? thats around 28% globally, with 17% of that this year alone! A genuinely shocking statistic, when you realise, this is the industry you're fighting to get into!. Now let me be frank, I am by no means boycotting, nore downplaying the gaming industry in any way. By the gods, Im trying to get a job in it myself!.",
      "So yes, you may have seen it yourself, a massive rise in smaller groups of devs, or parties of one, becoming the developer, the boss, the accountant, and so on. According to TIGA's findings in 2024, the number of those \"going solo\" as it were, have tripled from 3,600, or 12.7.% as a result. And that number continues to grow",
      "If I was to give my honest opinion, I would have to say it's genuinely a time of great unknown, yet, of great opportunity as well. Personally speaking, I'm on nobody's radar right now, I have a few projects I know I can work on and perfect, and hopefully, by the time I finish these projects, Ill have something substantial to show a potential employer, or client. ",
      { heading: "What does it mean to Freelance?" },
      "Well, to put it simply, it means you are your own boss. You are responsible for finding your own work, and for managing your own time. You are also responsible for managing your own finances, and for paying your own taxes. It's a lot of work, and it's not for everyone. But if you have the drive, the determination, and the skills, it can be a very rewarding career path.",
      "How would one establish a buisness you may ask? Well, you would need to register your buisness with the appropriate government agency, and you would need to obtain any necessary licenses or permits. You would also need to set up a business bank account, and you would need to keep track of your income and expenses. You would also need to file your taxes, and you would need to pay any applicable taxes.",
      "Just a quick note?, If you havent dones so already? Read my Blog 2, on the 4 pillars of professionalism. It will help you to understand what it takes to be a successful freelancer, and it will help you to understand what it takes to be a successful professional in any field.",
      {
        image: "assets/Blogs/FreeLancer.png",
        caption: "The 4 pillars of professionalism, as defined by the Creative Professionals Association.",
        credit: "AI generated image.",
      },
      {
        quote: "Plans are to be changed according to circumstances. - Sun Tzu",
        cite: "https://www.azquotes.com/author/19687-Sun_Tzu"
      },
      " The quote above, references the principles taught by Sun Tzu. An historic figure in war strategy. In its essence it means, as a freelancer, not everything will run smoothly all the time. By knowing yourself, and fully accpepting adaptability when most needed, you will be in a much greater stead to succeed!",
    ],
    sources: [
      {
        text: "Game Developer (2026). <em>Survey: One in four developers laid off over the past two years</em>. Reporting the GDC 2026 State of the Game Industry report.",
        link: "https://www.gamedeveloper.com/business/survey-one-in-four-developers-laid-off-over-the-past-two-years"
      },
      {
        text: "PC Gamer (2025). <em>More than 19,000 games launched on Steam this year, but almost half have fewer than 10 reviews</em>. Using SteamDB data.",
        link: "https://www.pcgamer.com/gaming-industry/more-than-19-000-games-launched-on-steam-this-year-but-almost-half-have-fewer-than-10-reviews/"
      },
      {
        text: "Esports Legal News (2026). <em>The Industry at a Breaking Point: Key Takeaways from the GDC 2026 State of the Game Industry Report</em>.",
        link: "https://esportslegal.news/2026/02/06/gdc-state-of-the-game-industry-report/"
      },
      {
        text: "TIGA (2024). <em>Weathering the storm: TIGA research reveals UK games dev sector continues to grow, despite global sector downturn</em>. Findings from <em>Making Games in the UK 2024</em>.",
        link: "https://tiga.org/news/weathering-the-storm-tiga-research-reveals-uk-games-dev-sector-continues-to-grow-despite-global-sector-downturn"
      },
    ]
  }, 
  {
    title: "Blog 4 - Are you connected? a Guide on networking In the Creative Industry",
    date: "2026-10-09",
    cover: "assets/Blogs/MatrixOperator.jpg",
    intro: "Get your in roads into the Industry. Here's how?",
    content: [  
      "Within the gaming indusrty, or indeed any industry, having a strong network of people you can depend on, arguably, can bolster your chances of success, even more so over and above just the work that you do. What do I mean by this? Well, for example, you want to apply for a specific role. Perhaps someone in your network, may know of an opportunity upcoming, either within thier company, or else where. That would be considered highly advantageous to you, because you have someone in your network, that has given you this information.",   
      { heading: "Why networking is absoluetly vital to you?" },
      "As aforementioned being \"well connected\" as it were, can be highly advantageous for a plethora of reasons, including insider information. There is also the aspect of collaboration. You may get the opportuinty to work on a project, that you might consider \"the best thing you've done\", and it's something that can be added to your repertiore. There can also be many opportunities for mentorship and support, helping you or someone you know, further their careers happily. Knowing someone that you can turn to quite readily, for the key piece of information you need, game changing!",
      "For a little context on why networking is critical to you, a study was conducted by Lnkedin, a highly reputable social media platform. Their study highlighted that, of a sample of 5 million job applications, those with a 7x higher success rate, were found to be owned by those of whom, have a connection in some form, to a person or group, they have specifically targeted in their chosen fields, as opposed to someone without. Again the saying \"It's who you know!\"",
      { heading: "Who do you need to know?" },
      "State the obvious, you don't need to know everyone, to have a strong network. Having a key selection of people, that you know you can utilise, as and when, is the objective. So, who do you need to know? Well this depends! If you lean more into the software enginerring side of game development, having a good core of like minded engineers would be advantageous to you, as they can of course support, share code, develop a piece you know you may not be able to, and so on. Or if you lean more to the creative, having a selection of artists, varying in all disciplines, could be there do to exactly the same thing, support, share, collaborate.", 
      { heading: "Are there events you can attend?" },      
      "Simply put, yes! There's a whole world of meet and greets, industry specific events, online events, the list goes on. Theres a ton of places that you as the developer, can place yourself, to be better seen for you, and your work, and to align yourself with selected individuals you know, can help build your network. Let's take a very popluar one, and an event thats almost upon us (at the time of writing this), The Scottish Game Developers Association(SGDA). This events is where you want to be, if you want to foster new relationships, collaborations, have your name spread across the right people. I know I'll be there!",
      "Believe it or not, there are people out there, that love to hear peoples journey's/success stories. Take me for example, almost five years ago, I was a bus driver. No disrespect to bus drivers, but to me, that was a deeply unfulfilling life. So at thirty three years old, I took a gamble, and went back to education. Haven't looked back since! As your network grows, you will come across people that can draw from your story, and help promote you in some sense! it is possible!",
      "Even with all of this, you can of course reach out by leaving business cards, and CV's with the right people. Providing its short and sweet! Time is money!",
      {
        image: "assets/Blogs/MatrixOperator.jpg",
        caption: "The Operator - The Matrix.",
        credit: "Warner Bros. & Desktop Backgrounds",
      },
      {
        quote: "Position youself, where the battle is already won. - Sun Tzu",
        cite: "https://burningforsuccess.com/sun-tzu-quotes/"
      },
      " The quote above, references the principles taught by Sun Tzu. An historic figure in war strategy. In its essence it means, you may have a much easier time of fighting your way through the challenges of the Gaming Industry, If you rely on more than what you know. Perhaps who you know?",

    ],
    sources: 
    [
      {
        text: "Batchelder, C. (2026). <em>LinkedIn Research Reveals a Hiring Blind Spot That Shuts Out Gen Z</em>. Inc.",
        link: "https://www.inc.com/colleen-batchelder/linkedin-research-reveals-a-hiring-blind-spot-that-shuts-out-gen-z/91417424"
      },
      {
        text: "The Level Design Book. <em>Communities</em>.",
        link: "https://book.leveldesignbook.com/appendix/communities"
      },
      {
        text: "Scottish Game Developers Association. <em>Events</em>.",
        link: "https://sgda.co.uk/events"
      },
      {
        text: "Scottish Games Network (2026). <em>Games Talks Live Returns to Edinburgh, Dundee and Glasgow this March</em>.",
        link: "https://scottishgames.net/2026/02/27/games-talks-live-returns-to-edinburgh-dundee-glasgow-march-2026/"
      },
      {
        text: "Scottish Games Network (2026). <em>Glasgow Indie Games Fest 2026: Tickets and Call for Speakers Now Open</em>.",
        link: "https://scottishgames.net/2026/03/27/glasgow-indie-games-fest-announces-2026/"
      },
      {
        text: "Grads in Games (2021). <em>What we're doing for 2021/22</em>.",
        link: "https://gradsingames.com/news/what-were-doing-for-2021-22/"
      },
      {
        text: "Grads in Games. <em>Games dev portfolio advice</em>.",
        link: "https://gradsingames.com/services/students/games-industry-portfolio-advice/"
      }
    ]   
  },
  {
    title: "Blog 5 - IP(Intellectual Property) rights In the Creative Industry",
    date: "2026-10-16",
    cover: "assets/Blogs/Blog5Image.png",
    intro: "Does your rights to IP matter?",
    content: [
      "Before we delve further into this specific topic, let me pose this question first? You have a subscription to the very popular AI music creator, Suno. Now, you make a masterpiece of a song on this platform. Who does it belong to?",
      "You? The creator? or Suno? and its developers?",
      {heading: "What is IP?"},
      "So let's break this down. IP(Intellectual property) is defined by governemnt, as something of which was created by you. An original concept, piece of music, artwork, a multitude of catergories indeed, rest under the IP umbrella. They are all protected by using patents, copyrights, trademarks, and other legal frameworks, to ensure that you materials are not unlawfully duplicated by someone else. ",
      "The key point for creatives is that copyright doesnt need to be registered constantly, it does happen automatically without applying or paying a fee. It covers literature, artistic works, photographs, music, software, and more. This in a broder sense, means that anything youve made so far, automatically has a level of protection already placed on it.",
      {heading: "Does it protect from Generative AI?" },
      "So, let's make this clear! Unless you choose to opt out of any training measures, used by any Ai platform you use, They can infact use your material, for data mining, and training purposes, and can potentially claim it under copyright. A crazy assumption! but genuinely a truthful one. This has of course been met with intense criticism, and I dont believe it to be a preferred data mining method anymore. crazy to believe am I right? Some creators of course, are protected on paper, but, the laws and statutes are still trailing way behind on the issue of how AI is trained.",
      "Allow me now, to give an example of what Im talking about. In november of 2025, Getty Images took Stability AI to court over infringement claims. The High Court rejected Getty’s secondary copyright infringement claim, holding that Stable Diffusion’s model weights weren’t an “infringing copy”, because the model never contained or stored copies of Getty’s images. Crucially, Getty dropped its main claim because there wasn’t enough evidence the model was trained in the UK, so the court never decided whether training on copyrighted works is itself infringement. Getty has been granted permission to appeal. What does this mrean? and how does it apply? Well, this is a great example of copyright struggling to cope. That particular case was concluded based on a technicality of fairness. What do you think?",
      {heading: "Who owns AI art?"},
      "Do you remember the scenario I posed at the start of this blog? The one with Suno? Well, this part covers exactly that!",
      "In March 2026, the US Supreme Court declined to hear Thaler v. Perlmutter, leaving in place the ruling that works created by AI alone can’t be copyrighted. This would be a natural assumption correct? The US Copyright Office has also said that prompting an AI system by itself doesn’t supply enough human creative control, though substantial human modification or selection of AI output can be protected. Now in my mind, that sounds like AI imagery, can be protected by the creator, after it has been conjured, and modified a select amount of time, based on the creators vision. Is that right?", 
      "The UK is different, which is a great comparison point. UK law has a specific provision on “computer-generated works” (section 9(3) of the Copyright, Designs and Patents Act 1988), and the 2026 report confirmed no change to it. Whilst somewhat vasgue sounding, this essentailly means, under the Copyright, Designs and Patents Act 1988, a new section has been added, (9(3)), which inn essence gives the composer of Ai generated works, the copyright, as they were the ones to make the arrangements for the design, and not the developers as such, even though the supplied basically, the medium.",
      {heading: "Ai in the gaming industry"},
      "This as you may have come to know, is a bit of a sore point within the gaming industry. Its caused a great deal of unknown, and damage to especially, the gaming industry. For those that keep up to date with industry news, you'll see it left, right, and center. Layoffs, pay cuts, even brand names closing for good! now I'm trying to fight for a job in this industry. Should i?",
      "So, taking from the GDC, and their claims show that 36% of game industry professionals use generative AI tools at work, but there’s a big split by role. 30% of those at game studios, compared with 58% at publishers, support teams, and marketing/PR firms. More strikingly, 52% think generative AI is having a negative impact on the industry, up from 30% the year before and 18% the year before that.",
      {heading: "Thinking about IP in the gaming indusrty"},
      "At the time of writing this blog, this case is still ongoing as we speak! This one im sure everyone has heard of by now. its the case Nintendo have taken against an indie team called PocketPair, the developers of the incresingly popular, Palworld.",
      "This case, is an example of a patent case, not copyright, as I see it, pocketpair have done nothing wrong really. A patent case makes it useful to show the different types of IP. Nintendo and The Pokémon Company sued Pocketpair in Tokyo in September 2024, alleging Palworld’s gameplay mechanics infringed their patents. The argument here being, Both pokemon, and Pocketpair utilise the mechanic of throwing objectively varying powered balls to capture the games creatures. The claims were later narrowed to older versions of Palworld after Pocketpair changed several mechanics, and a court opinion is expected on 9 November 2026. I will cover this more as it unfolds.",
      {
        image: "assets/Blogs/Palworld.jpg",
        caption: "<em>Palworld 1.0 Cover!</em>",
        credit: "PocketPair",
      },
      {
        quote: "“Water shapes its course according to the nature of the ground over which it flows; the soldier works out his victory in relation to the foe whom he is facing.” - Sun Tzu",
        cite: "https://burningforsuccess.com/sun-tzu-quotes/"
      },
      " The quote above, references the principles taught by Sun Tzu. An historic figure in war strategy. In its essence it means, as an individual, or a collective, Ai is changing everyting, and we must adapt to these changes, which suits a conclusion about creatives adapting to AI.",

    ],
    sources: [
      {
        text: "GOV.UK. <em>Intellectual property and your work: what intellectual property is</em>.",
        link: "https://www.gov.uk/intellectual-property-an-overview"
      },
      {
        text: "Office of the Small Business Commissioner. <em>Spotlight on... The Intellectual Property Office</em>.",
        link: "https://www.smallbusinesscommissioner.gov.uk/news/sbc-weekly-update/spotlight-on-the-intellectual-property-office/"
      },
      {
        text: "Osborne Clarke (2026). <em>Opted out: UK government moves away from preferred position on AI and copyright following report</em>.",
        link: "https://www.osborneclarke.com/insights/opted-out-uk-government-moves-away-preferred-position-ai-and-copyright-following-report"
      },
      {
        text: "Stephenson Harwood (2026). <em>UK government publishes report and impact assessment on Copyright and Artificial Intelligence: the debate continues</em>.",
        link: "https://www.stephensonharwood.com/post/102mpke/uk-government-publishes-report-and-impact-assessment-on-copyright-and-artificial-intelligence-the-debate-continues/"
      },
      {
        text: "Mayer Brown (2025). <em>Getty Images v Stability AI: What the High Court's Decision Means for Rights-Holders and AI Developers</em>. Getty Images v Stability AI [2025] EWHC 2863 (Ch).",
        link: "https://www.mayerbrown.com/en/insights/publications/2025/11/getty-images-v-stability-ai-what-the-high-courts-decision-means-for-rights-holders-and-ai-developers"
      },
      {
        text: "AIPPI (2026). <em>Getty Images v Stability AI: UK High Court Finds No Secondary Copyright Infringement in Landmark GenAI Ruling</em>.",
        link: "https://www.aippi.org/news/getty-images-v-stability-ai-uk-high-court-finds-no-secondary-copyright-infringement-in-landmark-genai-ruling/"
      },
      {
        text: "Penningtons Manches Cooper (2026). <em>AI, art and global approaches to copyright law: US Supreme Court declines to review the case of Thaler v Perlmutter</em>.",
        link: "https://www.penningtonslaw.com/insights/ai-art-and-global-approaches-to-copyright-law-us-supreme-court-declines-to-review-the-case-of-thaler-v-perlmutter/"
      },
      {
        text: "GDC Festival of Gaming (2026). <em>GDC 2026 State of the Game Industry Reveals Impact of Layoffs, Generative AI, and More</em>.",
        link: "https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/"
      }
    ]  
  }
];


const $ = id => document.getElementById(id);

const screens = {
  splash: $("splash"),
  menu: $("menu"),
  section: $("section"),
  page: $("page")
};

let pageParent = "menu";

//These functions are used to escape HTML, create slugs, format dates, and count items for display.
//They are used throughout the code to ensure that the content is displayed correctly and safely.
//A slug is a URL-friendly version of a string, typically used for creating readable and SEO-friendly URLs. 
function escapeHTML(text) {
  return String(text ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function slugify(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function isVideoItem(item) {
  return Boolean(item.youtube || item.video);
}

function thumbFor(item) {
  if (item.youtube) return `https://img.youtube.com/vi/${item.youtube}/hqdefault.jpg`;
  if (item.video) return item.poster || "";
  return item.src || "";
}

function countLabel(items) {
  const videos = items.filter(isVideoItem).length;
  const images = items.length - videos;
  const parts = [];
  if (images) parts.push(`${images} ${images === 1 ? "image" : "images"}`);
  if (videos) parts.push(`${videos} ${videos === 1 ? "video" : "videos"}`);
  return parts.join(" · ");
}

// ----- SCREENS -----
function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    const active = key === name;
    element.classList.toggle("is-active", active);
    element.setAttribute("aria-hidden", String(!active));
  });
}

// Fills the content page and shows it.
// crumbs: [{ label, path }], the last one is the current page.
function showPage({ html, crumbs, parent }) {
  pageParent = parent;

  $("breadcrumb").innerHTML = crumbs.map((crumb, i) => {
    const isLast = i === crumbs.length - 1;
    const item = isLast
      ? `<span aria-current="page">${escapeHTML(crumb.label)}</span>`
      : `<a href="#${crumb.path}">${escapeHTML(crumb.label)}</a>`;
    return i ? `<span class="sep">/</span>${item}` : item;
  }).join("");

  $("pageContent").innerHTML = html;
  screens.page.scrollTop = 0;
  showScreen("page");
}

// Educational work breadcrumbs, used on all educational pages.
// The last crumb is the current page, so it has no path.
const MENU_CRUMB = { label: "Menu", path: "menu" };
const EDU_CRUMB = { label: "Educational Work", path: "educational-work" };
const PROJECTS_CRUMB = { label: "University Projects", path: "educational-work/university-projects" };
const BLOGS_CRUMB = { label: "Educational Blogs", path: "educational-work/blogs" };

// Renders the hub page for educational work, with links to university projects and blogs.
// Each link is a card with a background image, number, title and subtitle.
function renderEducationalHub() {
  showPage({
    parent: "menu",
    crumbs: [MENU_CRUMB, EDU_CRUMB],
    html: `
      <header class="page-header">
        <p class="page-kicker">03</p>
        <h1 class="page-title">Educational Work</h1>
        <p class="page-intro">The games I've built and the research I've written as part of my studies at UWS Paisley.</p>
      </header>

      <div class="hub">
        <a href="#educational-work/university-projects" class="menu-option"
           style="--image: url('assets/menu/university-projects.jpg'); --fallback: linear-gradient(160deg, #1f2433, #0b0b10); --delay: 0.15s;">
          <span class="menu-number">03.1</span>
          <span class="menu-label">University Projects</span>
          <span class="menu-sub">Games and coursework from my degree.</span>
        </a>

        <a href="#educational-work/blogs" class="menu-option"
           style="--image: url('assets/Blogs/BlogFrontCover.jpg'); --fallback: linear-gradient(160deg, #2e2026, #0b0b10); --delay: 0.25s;">
          <span class="menu-number">03.2</span>
          <span class="menu-label">Educational Blogs</span>
          <span class="menu-sub">My research and writing on level design and environment art.</span>
        </a>
      </div>
    `
  });
}

// Renders the list of university projects, newest first.
// Each project is a card with a cover image, title, status, module and description.
function renderUniversityProjects() {
  const cards = UNIVERSITY_PROJECTS.map((project, i) => {
    const gallery = Array.isArray(project.gallery) ? project.gallery : [];
    const hasGallery = gallery.length > 0;
    const style = project.cover ? `style="--image: url('${escapeHTML(project.cover)}')"` : "";

    return `
      <button class="project-card ${hasGallery ? "" : "no-gallery"}" data-index="${i}" ${style}
              ${hasGallery ? `aria-label="View gallery for ${escapeHTML(project.title)}"` : "disabled"}>
        <div class="project-meta">
          ${project.status ? `<span class="tag">${escapeHTML(project.status)}</span>` : ""}
          ${project.module ? `<span class="tag subtle">${escapeHTML(project.module)}</span>` : ""}
        </div>
        <h3>${escapeHTML(project.title)}</h3>
        ${project.description ? `<p>${escapeHTML(project.description)}</p>` : ""}
        ${hasGallery ? `<span class="project-cta">View gallery &middot; ${countLabel(gallery)}</span>` : ""}
      </button>
    `;
  }).join("");

  showPage({
    parent: "educational-work",
    crumbs: [MENU_CRUMB, EDU_CRUMB, PROJECTS_CRUMB],
    html: `
      <header class="page-header">
        <p class="page-kicker">03.1</p>
        <h1 class="page-title">University Projects</h1>
        <p class="page-intro">Games and coursework from my degree. Select a project to see its gallery.</p>
      </header>
      ${cards
        ? `<div class="project-grid">${cards}</div>`
        : `<p class="empty-note">Projects coming soon.</p>`}
    `
  });

  $("pageContent").querySelectorAll(".project-card:not(.no-gallery)").forEach(card => {
    card.addEventListener("click", () => {
      const project = UNIVERSITY_PROJECTS[Number(card.dataset.index)];
      openCollection(project.title, project.gallery, 0);
    });
  });
}

// ----- BLOGS -----
function postContent(post) {
  return post.content || post.body || [];
}

// Estimates reading time in minutes, based on 200 words per minute.
// Returns at least 1 minute, even for very short posts.
function readingTime(post) {
  const text = postContent(post).map(block => {
    if (typeof block === "string") return block;
    if (block.list) return block.list.join(" ");
    return block.heading || block.subheading || block.quote || block.caption || "";
  }).join(" ");
  const words = text.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}  

// Sorts posts by date, newest first.
// Returns a new array, does not modify the original.
function sortedPosts(posts) {
  return [...posts].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

// Renders the list of blog posts, newest first.
// Each post is a card with a cover image, title, date, reading time and intro.
function renderBlogList() {
  const cards = sortedPosts(EDUCATIONAL_BLOGS).map(post => {
    const firstBlock = postContent(post)[0];
    const intro = post.intro || (typeof firstBlock === "string" ? firstBlock : "");

    return `
      <a class="blog-card" href="#educational-work/blogs/${slugify(post.title)}">
        <div class="blog-cover">
          ${post.cover ? `<img src="${escapeHTML(post.cover)}" alt="" loading="lazy" onerror="this.remove();">` : ""}
        </div>
        <div class="blog-card-body">
          <p class="blog-meta">${formatDate(post.date)} &middot; ${readingTime(post)} min read</p>
          <h3>${post.title}</h3>
          ${intro ? `<p class="blog-intro">${intro}</p>` : ""}
          <span class="blog-read">Read post &rarr;</span>
        </div>
      </a>
    `;
  }).join("");

  showPage({
    parent: "educational-work",
    crumbs: [MENU_CRUMB, EDU_CRUMB, BLOGS_CRUMB],
    html: `
      <header class="page-header">
        <p class="page-kicker">03.2</p>
        <h1 class="page-title">Educational Blogs</h1>
        <p class="page-intro">Research and writing on level design and environment art, with sources for everything I reference.</p>
      </header>
      ${cards
        ? `<div class="blog-grid">${cards}</div>`
        : `<p class="empty-note">Posts coming soon.</p>`}
    `
  });
}

// Renders a single block of content for a blog post.
// Returns the HTML for that block.
function renderBlock(block) {
  if (typeof block === "string") return `<p>${block}</p>`;

  if (block.heading) return `<h2>${block.heading}</h2>`;
  if (block.subheading) return `<h3>${block.subheading}</h3>`;

  if (block.image) {
    const credit = block.credit
      ? `<span class="article-credit">${block.link
          ? `<a href="${escapeHTML(block.link)}" target="_blank" rel="noopener">${block.credit} &#8599;</a>`
          : block.credit}</span>`
      : "";
    return `
      <figure class="article-figure">
        <img src="${escapeHTML(block.image)}" alt="${escapeHTML(block.caption || "")}" loading="lazy"
             onerror="this.parentElement.classList.add('missing'); this.remove();">
        ${block.caption || credit ? `<figcaption>${block.caption || ""}${credit}</figcaption>` : ""}
      </figure>
    `;
  }

  if (block.youtube) {
    return `
      <figure class="article-figure">
        <div class="article-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${escapeHTML(block.youtube)}"
                  title="${escapeHTML(block.caption || "Video")}"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
      </figure>
    `;
  }

  if (block.quote) {
    return `
      <blockquote>
        <p>${block.quote}</p>
        ${block.cite ? `<cite>&mdash; ${block.cite}</cite>` : ""}
      </blockquote>
    `;
  }

  if (block.list) {
    return `<ul>${block.list.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }

  return "";
}

function renderBlogPost(slug) {
  const post = EDUCATIONAL_BLOGS.find(p => slugify(p.title) === slug);

  if (!post) {
    showPage({
      parent: "educational-work/blogs",
      crumbs: [MENU_CRUMB, EDU_CRUMB, BLOGS_CRUMB],
      html: `
        <header class="page-header">
          <h1 class="page-title">Post not found</h1>
          <p class="page-intro">That post may have been renamed or removed.</p>
        </header>
        <a class="article-back" href="#educational-work/blogs">&larr; All posts</a>
      `
    });
    return;
  }

  const sources = post.sources || [];

  showPage({
    parent: "educational-work/blogs",
    crumbs: [MENU_CRUMB, EDU_CRUMB, BLOGS_CRUMB, { label: post.title, path: "" }],
    html: `
      <article class="article">
        ${post.cover ? `
          <div class="article-cover">
            <img src="${escapeHTML(post.cover)}" alt="" onerror="this.parentElement.remove();">
          </div>` : ""}
        <p class="article-meta">${formatDate(post.date)} &middot; ${readingTime(post)} min read</p>
        <h1 class="article-title">${post.title}</h1>
        ${post.intro ? `<p class="article-intro">${post.intro}</p>` : ""}

        <div class="article-body">
          ${postContent(post).map(renderBlock).join("")}
        </div>

        ${sources.length ? `
          <section class="article-sources">
            <h2>Sources</h2>
            <ol>
              ${sources.map(source => {
                const text = typeof source === "string" ? source : source.text;
                const link = typeof source === "string" ? "" : source.link;
                return `<li>${text}${link
                  ? ` <a href="${escapeHTML(link)}" target="_blank" rel="noopener">${escapeHTML(link)} &#8599;</a>`
                  : ""}</li>`;
              }).join("")}
            </ol>
          </section>` : ""}

        <a class="article-back" href="#educational-work/blogs">&larr; All posts</a>
      </article>
    `
  });
}

// This section is for the viewer, which shows images and videos in a modal overlay.
// It can be opened from any screen, and the back button closes it.
let viewerItems = [];
let viewerIndex = 0;
let imageSwapToken = 0;
const IMAGE_FADE_MS = 150;

function buildViewer() {
  const viewer = document.createElement("div");
  viewer.id = "viewer";
  viewer.className = "viewer";
  viewer.hidden = true;
  viewer.innerHTML = `
    <div class="viewer-backdrop"></div>
    <div class="viewer-panel" role="dialog" aria-modal="true" aria-labelledby="viewerTitle">
      <div class="viewer-header">
        <h3 id="viewerTitle"></h3>
        <button class="viewer-close" aria-label="Close">&times;</button>
      </div>
      <div class="viewer-stage" id="viewerStage">
        <button class="viewer-arrow viewer-prev" aria-label="Previous">&#8249;</button>
        <img id="viewerImage" alt="">
        <video id="viewerVideo" controls playsinline preload="metadata"></video>
        <iframe id="viewerYoutube" title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <button class="viewer-arrow viewer-next" aria-label="Next">&#8250;</button>
      </div>
      <p id="viewerCaption" class="viewer-caption"></p>
      <p id="viewerNote" class="viewer-note" hidden></p>
      <p id="viewerSourceWrap" class="viewer-source" hidden></p>
      <div id="viewerThumbs" class="viewer-thumbs"></div>
    </div>
  `;
  document.body.appendChild(viewer);

  viewer.querySelector(".viewer-backdrop").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-close").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-prev").addEventListener("click", () => showItem(viewerIndex - 1));
  viewer.querySelector(".viewer-next").addEventListener("click", () => showItem(viewerIndex + 1));

  const stage = $("viewerStage");
  const image = $("viewerImage");
  const video = $("viewerVideo");

  image.addEventListener("load", () => {
    image.classList.remove("loading");
    if (stage.classList.contains("show-image")) {
      stage.classList.remove("missing");
      image.style.display = "block";
    }
  });
  image.addEventListener("error", () => {
    image.classList.remove("loading");
    if (stage.classList.contains("show-image")) {
      stage.classList.add("missing");
      image.style.display = "none";
    }
  });
  video.addEventListener("error", () => {
    if (stage.classList.contains("show-video") && video.getAttribute("src")) {
      stage.classList.add("missing");
      video.style.display = "none";
    }
  });

  document.addEventListener("keydown", event => {
    if (viewer.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeViewer();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showItem(viewerIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showItem(viewerIndex + 1);
    }
  });
}

function viewerIsOpen() {
  const viewer = $("viewer");
  return Boolean(viewer && !viewer.hidden);
}

// Shows only the player that's needed and hides the others.
function showOnlyMedia(kind) {
  const media = {
    image: $("viewerImage"),
    video: $("viewerVideo"),
    youtube: $("viewerYoutube")
  };
  Object.entries(media).forEach(([name, element]) => {
    element.style.display = name === kind ? "block" : "none";
    element.style.width = "100%";
    element.style.height = "100%";
    element.style.border = "0";
  });
  media.image.style.objectFit = "contain";
}

// Fade the current image out while the next one preloads,
// then swap and fade in once both are finished.
function swapImage(src, alt) {
  const image = $("viewerImage");
  const token = ++imageSwapToken;

  if (image.getAttribute("src") === src) {
    image.alt = alt;
    image.classList.remove("loading");
    return;
  }

  image.classList.add("loading");

  const fadeOut = new Promise(resolve => setTimeout(resolve, IMAGE_FADE_MS));
  const preload = new Promise(resolve => {
    const next = new Image();
    next.onload = () => resolve();
    next.onerror = () => resolve();
    next.src = src;
  });

  Promise.all([fadeOut, preload]).then(() => {
    if (token !== imageSwapToken) return;
    image.alt = alt;
    image.src = src;
  });
}

function stopMedia() {
  const video = $("viewerVideo");
  const youtube = $("viewerYoutube");

  if (video.getAttribute("src")) {
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("poster");
    video.load();
  }

  const youtubeSrc = youtube.getAttribute("src");
  if (youtubeSrc && youtubeSrc !== "about:blank") {
    youtube.src = "about:blank";
  }
}

function openCollection(title, items, startIndex = 0) {
  if (!items || !items.length) return;
  viewerItems = items;

  const viewer = $("viewer");
  $("viewerTitle").textContent = title;
  viewer.classList.toggle("single", items.length === 1);

  $("viewerThumbs").innerHTML = items.map((item, i) => {
    const thumb = thumbFor(item);
    return `
      <button class="viewer-thumb ${isVideoItem(item) ? "is-video" : ""}" data-index="${i}" aria-label="View item ${i + 1}">
        <span>${i + 1}</span>
        ${thumb ? `<img src="${escapeHTML(thumb)}" alt="" onerror="this.remove();">` : ""}
      </button>
    `;
  }).join("");

  $("viewerThumbs").querySelectorAll(".viewer-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => showItem(Number(thumb.dataset.index)));
  });

  viewer.hidden = false;
  showItem(startIndex);
  viewer.querySelector(".viewer-close").focus();
}

function showItem(index) {
  const total = viewerItems.length;
  viewerIndex = (index + total) % total;
  const item = viewerItems[viewerIndex];

  const stage = $("viewerStage");
  const image = $("viewerImage");
  const video = $("viewerVideo");
  const youtube = $("viewerYoutube");
  const wasShowingImage = stage.classList.contains("show-image");

  stopMedia();
  stage.classList.remove("missing", "show-image", "show-video", "show-youtube");

  if (item.youtube) {
    imageSwapToken++;
    showOnlyMedia("youtube");
    youtube.src = `https://www.youtube-nocookie.com/embed/${item.youtube}`;
    stage.classList.add("show-youtube");
  } else if (item.video) {
    imageSwapToken++;
    showOnlyMedia("video");
    if (item.poster) video.poster = item.poster;
    video.src = item.video;
    stage.classList.add("show-video");
  } else {
    if (!wasShowingImage) image.classList.add("loading");
    showOnlyMedia("image");
    stage.classList.add("show-image");
    swapImage(item.src, item.caption || "");
  }

  $("viewerCaption").textContent = `${item.caption || ""}  (${viewerIndex + 1} / ${total})`;

  const note = $("viewerNote");
  note.textContent = item.note || "";
  note.hidden = !item.note;

  const sourceWrap = $("viewerSourceWrap");
  sourceWrap.textContent = "";
  if (item.credit || item.link) {
    const label = item.credit ? `Credit: ${item.credit}` : "View original source";
    if (item.link) {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = `${label} \u2197`;
      sourceWrap.appendChild(link);
    } else {
      sourceWrap.textContent = label;
    }
    sourceWrap.hidden = false;
  } else {
    sourceWrap.hidden = true;
  }

  $("viewerThumbs").querySelectorAll(".viewer-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === viewerIndex);
  });
}

function closeViewer() {
  stopMedia();
  imageSwapToken++;
  $("viewer").hidden = true;
}

// this section is for the routing system, which shows the right screen based on the address bar.
// Works out which screen to show from the address bar,
// so the browser's back button and shared links both work.
function route() {
  if (viewerIsOpen()) closeViewer();

  const path = decodeURIComponent(location.hash.slice(1)).replace(/\/+$/, "");

  if (!path) {
    showScreen("splash");
    return;
  }

  if (path === "menu") {
    showScreen("menu");
    return;
  }

  const placeholder = PLACEHOLDERS[path];
  if (placeholder) {
    $("sectionNumber").textContent = placeholder.number;
    $("sectionTitle").textContent = placeholder.title;
    $("sectionText").textContent = placeholder.text;
    showScreen("section");
    return;
  }

  const [area, sub, slug] = path.split("/");

  if (area === "educational-work") {
    if (!sub) return renderEducationalHub();
    if (sub === "university-projects") return renderUniversityProjects();
    if (sub === "blogs") return slug ? renderBlogPost(slug) : renderBlogList();
    return renderEducationalHub();
  }

  // Unknown address: fall back to the menu
  showScreen("menu");
}

function enterSite() {
  location.hash = "menu";
}

// ----- START -----
buildViewer();

$("enterButton").addEventListener("click", enterSite);
$("backButton").addEventListener("click", () => {
  location.hash = "menu";
});
$("pageBack").addEventListener("click", () => {
  location.hash = pageParent;
});

document.addEventListener("keydown", event => {
  // The viewer handles its own keys first
  if (event.defaultPrevented || viewerIsOpen()) return;

  const onSplash = screens.splash.classList.contains("is-active");
  const onSection = screens.section.classList.contains("is-active");
  const onPage = screens.page.classList.contains("is-active");

  if (onSplash && event.key === "Enter" && document.activeElement !== $("enterButton")) {
    event.preventDefault();
    enterSite();
  }

  if (event.key === "Escape") {
    if (onSection) location.hash = "menu";
    if (onPage) location.hash = pageParent;
  }
});

window.addEventListener("hashchange", route);
route();