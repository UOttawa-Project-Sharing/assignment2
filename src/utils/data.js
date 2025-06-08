// home page data
export const HomePageData = [{
    image: "https://picsum.photos/1200/800?random=101",
    title: "Discover Our Cross Fit Programs",
    quote: "Strength does not come from the body. It comes from the will.",
}, {
    image: "https://picsum.photos/1200/800?random=102",
    title: "Experience Our Yoga Classes",
    quote: "The body benefits from movement, and the mind benefits from stillness.",
}, {
    image: "https://picsum.photos/1200/800?random=103",
    title: "Join Our Spinning Sessions",
    quote: "Don’t limit your challenges. Challenge your limits.",
}, {
    image: "https://picsum.photos/1200/800?random=104",
    title: "Make Progress with Pilates",
    quote: "Change happens through movement and movement heals.",
}, {
    image: "https://picsum.photos/1200/800?random=105",
    title: "Meet Our Team",
    quote: "Alone we can do so little; together we can do so much.",
},];

// Membership data
export const MembershipPlans = [{
    title: "Base",
    price: 20,
    per: "Month",
    description: "For casual people",
    features: [{ text: "Gym Access", included: true }],
    highlight: false,
}, {
    title: "Advanced",
    price: 49,
    per: "Month",
    description: "For people that want quick progress",
    features: [{ text: "Gym Access", included: true }, { text: "1 free course / week", included: true }],
    highlight: true,
    tag: "Most Value",
}, {
    title: "Expert",
    price: 120,
    per: "Month",
    description: "For people that want the best progress",
    features: [{ text: "Gym Access", included: true }, { text: "4 free course / week", included: true }],
    highlight: false,
}];

export const MembershipTypeMap = {
    Base: { type: "Membership", subType: "Base", subSubType: "", eventId: "" },
    Advanced: { type: "membership", subType: "Advanced", subSubType: "", eventId: "" },
    Expert: { type: "membership", subType: "Expert", subSubType: "", eventId: "" },
};

// Program data
export const ProgramsInfo = {
    "crossfit": {
        name: "Cross Fit",
        description: "High-intensity fitness program combining weightlifting, gymnastics, and cardio through varied daily workouts. Scalable group classes with certified coaching focus on functional movements and measurable results. Build strength, endurance, and overall fitness in a supportive community environment.",
        backgroundImage: "https://picsum.photos/1200/800?random=21",
        subprograms: [{
            name: "Open Gym",
            image: "https://picsum.photos/400/220?random=31",
            description: "Access our facility with flexibility. Train independently with world-class equipment and space.",
        }, {
            name: "Circuit Fit",
            image: "https://picsum.photos/400/220?random=32",
            description: "High-energy circuit training to improve strength, endurance, and fitness in a supportive group.",
        }, {
            name: "Power Fit",
            image: "https://picsum.photos/400/220?random=33",
            description: "Lift heavy and get stronger. Focused sessions on Olympic lifts and power moves.",
        }, {
            name: "Total Fit",
            image: "https://picsum.photos/400/220?random=34",
            description: "A full-body workout blending strength, cardio, and flexibility for total conditioning.",
        }],
    }, "yoga": {
        name: "Yoga",
        description: "Mind-body practice combining physical postures, breathing techniques, and meditation. Improve flexibility, strength, and mental well-being through ancient traditions adapted for modern life. Classes for all levels in a peaceful, supportive environment.",
        backgroundImage: "https://picsum.photos/1200/800?random=22",
        subprograms: [{
            name: "Hatha Yoga",
            image: "https://picsum.photos/400/220?random=35",
            description: "Gentle, slow-paced yoga focusing on basic postures and breathing. Perfect for beginners.",
        }, {
            name: "Vinyasa Flow",
            image: "https://picsum.photos/400/220?random=36",
            description: "Dynamic sequences linking movement with breath. Build strength and flexibility through flowing transitions.",
        }, {
            name: "Yin Yoga",
            image: "https://picsum.photos/400/220?random=37",
            description: "Passive, meditative practice with long-held poses. Deep stretching and relaxation for stress relief.",
        }, {
            name: "Power Yoga",
            image: "https://picsum.photos/400/220?random=38",
            description: "Athletic, vigorous style building heat and strength. Fast-paced flow for fitness-focused practitioners.",
        }],
    }, "spinning": {
        name: "Spinning",
        description: "High-energy indoor cycling classes with motivating music and expert instruction. Burn calories, build cardiovascular endurance, and strengthen legs in a fun group setting. All fitness levels welcome with adjustable resistance.",
        backgroundImage: "https://picsum.photos/1200/800?random=23",
        subprograms: [{
            name: "Spin Basics",
            image: "https://picsum.photos/400/220?random=39",
            description: "Introduction to indoor cycling with proper form and technique. Build confidence and endurance.",
        }, {
            name: "HIIT Spin",
            image: "https://picsum.photos/400/220?random=40",
            description: "High-intensity interval training on bikes. Maximize calorie burn with challenging sprint intervals.",
        }, {
            name: "Endurance Ride",
            image: "https://picsum.photos/400/220?random=41",
            description: "Longer, steady-state rides building cardiovascular fitness and mental toughness.",
        }, {
            name: "Rhythm Ride",
            image: "https://picsum.photos/400/220?random=42",
            description: "Music-driven cycling experience combining choreography with cardio. Dance on the bike!",
        }],
    }, "pilates": {
        name: "Pilates",
        description: "Low-impact exercise method focusing on core strength, flexibility, and body awareness. Precise movements and controlled breathing improve posture, balance, and muscle tone. Equipment-based and mat classes available for all abilities.",
        backgroundImage: "https://picsum.photos/1200/800?random=24",
        subprograms: [{
            name: "Mat Pilates",
            image: "https://picsum.photos/400/220?random=43",
            description: "Classic floor-based Pilates using body weight. Focus on core strength and stability.",
        }, {
            name: "Reformer Pilates",
            image: "https://picsum.photos/400/220?random=44",
            description: "Equipment-based training using springs and pulleys. Enhanced resistance and support for precise movements.",
        }, {
            name: "Pilates Fusion",
            image: "https://picsum.photos/400/220?random=45",
            description: "Creative blend of Pilates with yoga and barre elements. Dynamic full-body conditioning.",
        }, {
            name: "Clinical Pilates",
            image: "https://picsum.photos/400/220?random=46",
            description: "Therapeutic approach for injury recovery and prevention. Small classes with personalized attention.",
        }],
    },
};

// const trainers = [{
//     name: "George",
//     description: "George is a certified personal trainer with over a decade of experience helping clients achieve their fitness goals. Passionate and motivating, he specializes in strength training and functional movement.",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     link: "/trainers/george",
// }, {
//     name: "Michel Lagacé",
//     description: "Michel is a dynamic and enthusiastic trainer known for his personalized approach to fitness. With a background in sports science, he crafts effective workout plans for all levels.",
//     image: "https://randomuser.me/api/portraits/men/44.jpg",
//     link: "/trainers/michel",
// }, {
//     name: "Lucy Smith",
//     description: "George is a certified personal trainer with over a decade of experience helping clients achieve their fitness goals. Passionate and motivating, he specializes in strength training and functional movement.",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     link: "/trainers/george2",
// }, {
//     name: "Laurence Dupont",
//     description: "Michel is a dynamic and enthusiastic trainer known for his personalized approach to fitness. With a background in sports science, he crafts effective workout plans for all levels.",
//     image: "https://randomuser.me/api/portraits/men/44.jpg",
//     link: "/trainers/michel2",
// },];
export const trainers = [
    {
        id: "george",
        name: "George Lechapé",
        tagline: "Personal Trainer",
        title: "STRENGTH & CARDIO COACH",
        shortDescription: "With a science-based approach, I empower clients to achieve peak physical health. Let's build your best self together.",
        description: "George is a certified personal trainer with over 10 years of experience in the fitness industry. He specializes in strength training, functional movement, and cardiovascular conditioning. George's passion for fitness and health drives him to create personalized workout plans that help clients achieve their goals effectively and sustainably.",
        about: "George is a certified fitness professional with over a decade of experience coaching clients of all levels. His approach combines modern science with practical routines, ensuring every client enjoys sustainable progress. Whether your focus is strength, stamina, or holistic health, George crafts a tailored path for your unique needs. He believes in supporting not just your physical transformation, but also your confidence and motivation to maintain a healthy lifestyle.",
        actions: [{icon: "🏃", label: "Cardio"}, {icon: "📅", label: "Schedule"}, {
            icon: "🍎", label: "Nutrition"
        }, {icon: "💪", label: "Strength"}],
        profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
        image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&w=500&h=360&fit=crop",
        cta: "Book a Session",
        ctaLink: "#book",
        moreLink: "#about"
    },
    {
        id: "michel",
        name: "Michel Lagacé",
        tagline: "Yoga Instructor",
        title: "MINDFULNESS & FLEXIBILITY COACH",
        shortDescription: "Guiding you to inner peace and physical flexibility through mindful yoga practices.",
        description: "Michel is a passionate yoga instructor with over 8 years of experience in teaching various styles of yoga. His classes focus on mindfulness, breath control, and flexibility, helping students connect their body and mind. Michel believes in creating a supportive environment where everyone can explore their limits and find balance.",
        about: "Michel's journey into yoga began as a personal practice to manage stress and improve flexibility. Over the years, he has trained in multiple yoga styles including Hatha, Vinyasa, and Yin Yoga. His classes are designed to cater to all levels, from beginners to advanced practitioners. Michel emphasizes the importance of breathwork and meditation in achieving overall well-being.",
        actions: [{icon: "🧘", label: "Yoga"}, {icon: "📅", label: "Schedule"}, {
            icon: "🌿", label: "Wellness"
        }, {icon: "💪", label: "Flexibility"}],
        profilePicture: "https://randomuser.me/api/portraits/men/44.jpg",
        image: "https://images.pexels.com/photos/3822620/pexels-photo-3822620.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&w=500&h=360&fit=crop",
        cta: "Join a Class",
        ctaLink: "#join",
        moreLink: "#about"
    },
    {
        id: "lucy",
        name: "Lucy Smith",
        tagline: "Spinning Instructor",
        title: "ENDURANCE & ENERGY COACH",
        shortDescription: "Igniting your passion for cycling through high-energy spinning classes.",
        description: "Lucy is a certified spinning instructor with a background in competitive cycling. Her classes are designed to push your limits while having fun. With her energetic playlists and motivating coaching style, Lucy helps you build endurance and strength on the bike.",
        about: "Lucy's love for cycling started at a young age, leading her to compete in various cycling events. She transitioned to teaching spinning classes to share her passion and inspire others to enjoy the benefits of indoor cycling. Her classes focus on building cardiovascular fitness, strength, and mental resilience.",
        actions: [{icon: "🚴", label: "Spinning"}, {icon: "📅", label: "Schedule"}, {
            icon: "🎶", label: "Music"
        }, {icon: "💪", label: "Endurance"}],
        profilePicture: "https://randomuser.me/api/portraits/men/55.jpg",
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&w=500&h=360&fit=crop",
        cta: "Book a Ride",
        ctaLink: "#book",
        moreLink: "#about"
    },
    {
        id: "laurence",
        name: "Laurence Dupont",
        tagline: "Pilates Instructor",
        title: "CORE STRENGTH & BALANCE COACH",
        shortDescription: "Transforming your body through focused pilates practices for strength and flexibility.",
        description: "Laurence is an experienced pilates instructor dedicated to helping clients achieve core strength and balance. With a background in dance and physical therapy, Laurence's classes are designed to enhance body awareness and improve overall fitness.",
        about: "Laurence's journey into pilates began as a way to recover from a dance injury. This led to a deep appreciation for the method's benefits in building strength and flexibility. Laurence's classes emphasize controlled movements, breathwork, and alignment to ensure safe and effective workouts for all levels.",
        actions: [{icon: "🧘‍♀️", label: "Pilates"}, {icon: "📅", label: "Schedule"}, {
            icon: "💪", label: "Strength"
        }, {icon: "🤸", label: "Balance"}],
        profilePicture: "https://randomuser.me/api/portraits/men/66.jpg",
        image: "https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3822625/pexels-photo-3822625.jpeg?auto=compress&w=500&h=360&fit=crop",
        cta: "Join a Session",
        ctaLink: "#join",
        moreLink: "#about"
    },
];

export function getTrainerById(id) {
    return trainers.find(trainer => trainer.id === id);
}

export const trainerAvailability = [];