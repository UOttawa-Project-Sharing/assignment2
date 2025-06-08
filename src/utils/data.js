// home page data
export const HomePageData = [{
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
    title: "Discover Our Cross Fit Programs",
    quote: "Strength does not come from the body. It comes from the will.",
}, {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
    title: "Experience Our Yoga Classes",
    quote: "The body benefits from movement, and the mind benefits from stillness.",
}, {
    image: "https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?w=1200&h=800&fit=crop",
    title: "Join Our Spinning Sessions",
    quote: "Don't limit your challenges. Challenge your limits.",
}, {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop",
    title: "Make Progress with Pilates",
    quote: "Change happens through movement and movement heals.",
}, {
    image: "https://images.unsplash.com/photo-1595554919503-b806f0f8f106?w=1200&h=800&fit=crop",
    title: "Meet Our Team",
    quote: "Alone we can do so little; together we can do so much.",
}];

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
export const ProgramsInfo = [
    {
        id: "crossfit",
        name: "Cross Fit",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=330&fit=crop",
        shortDescription: ["CrossFit is a high-intensity fitness program that combines elements of weightlifting, gymnastics, and cardiovascular training. It focuses on functional movements and is designed to improve overall fitness through varied daily workouts."],
        description: "High-intensity fitness program combining weightlifting, gymnastics, and cardio through varied daily workouts. Scalable group classes with certified coaching focus on functional movements and measurable results. Build strength, endurance, and overall fitness in a supportive community environment.",
        backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
        subprograms: [{
            name: "Open Gym",
            image: "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=400&h=220&fit=crop",
            description: "Access our fully equipped CrossFit facility with complete freedom to train on your schedule. Use our Olympic weightlifting platforms, pull-up rigs, and full range of functional fitness equipment.",
        }, {
            name: "Circuit Fit",
            image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=400&h=220&fit=crop",
            description: "High-intensity circuit training combining functional movements with time-based challenges. Boost cardiovascular fitness, build lean muscle, and improve overall conditioning in energizing group sessions.",
        }, {
            name: "Power Fit",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=220&fit=crop",
            description: "Specialized strength training focusing on Olympic lifts, powerlifting movements, and explosive power development. Perfect for athletes and serious lifters looking to maximize strength gains.",
        }, {
            name: "Total Fit",
            image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&h=220&fit=crop",
            description: "Comprehensive full-body conditioning program integrating strength training, cardiovascular fitness, mobility work, and functional movement patterns for complete physical development.",
        }],
    },
    {
        id: "yoga",
        name: "Yoga",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=330&fit=crop",
        shortDescription: ["Yoga is a mind-body practice that combines physical postures, breathing techniques, and meditation. It improves flexibility, strength, and mental well-being through ancient traditions adapted for modern life."],
        description: "Ancient mind-body practice combining physical postures, breathing techniques, and meditation. Improve flexibility, strength, balance, and mental well-being through time-tested traditions adapted for modern life. Classes for all levels in a peaceful, supportive environment.",
        backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        subprograms: [{
            name: "Hatha Yoga",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=220&fit=crop",
            description: "Gentle, slow-paced yoga practice emphasizing basic postures, proper alignment, and deep breathing. Ideal for beginners and those seeking a meditative, restorative approach to yoga.",
        }, {
            name: "Vinyasa Flow",
            image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=220&fit=crop",
            description: "Dynamic, flowing sequences that link breath with movement. Build strength, flexibility, and grace through creative transitions and energizing flows suitable for intermediate practitioners.",
        }, {
            name: "Yin Yoga",
            image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=220&fit=crop",
            description: "Passive, meditative practice featuring long-held poses (3-5 minutes) targeting deep connective tissues. Promotes flexibility, stress relief, and inner calm through stillness and mindfulness.",
        }, {
            name: "Power Yoga",
            image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=220&fit=crop",
            description: "Athletic, vigorous yoga style that builds heat, strength, and stamina. Fast-paced, challenging sequences designed for fitness-focused practitioners seeking a dynamic workout.",
        }],
    },
    {
        id: "spinning",
        name: "Spinning",
        image: "https://images.unsplash.com/photo-1707985287123-4bd2e9152d3d?w=600&h=330&fit=crop",
        shortDescription: ["Spinning is a high-energy indoor cycling workout that combines music, motivation, and expert instruction. It builds cardiovascular endurance, strengthens legs, and burns calories in a fun group setting."],
        description: "High-energy indoor cycling classes featuring motivating music, expert instruction, and immersive experiences. Burn calories, build cardiovascular endurance, and strengthen lower body in an electrifying group atmosphere. All fitness levels welcome with adjustable resistance.",
        backgroundImage: "https://images.unsplash.com/photo-1598290068762-8a427fd42e7e?w=1200&h=800&fit=crop",
        subprograms: [{
            name: "Spin Basics",
            image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=220&fit=crop",
            description: "Beginner-friendly introduction to indoor cycling focusing on proper bike setup, riding technique, and basic training principles. Build confidence and cardiovascular base in a supportive environment.",
        }, {
            name: "HIIT Spin",
            image: "https://images.unsplash.com/photo-1554470166-20d3f466089b?w=400&h=220&fit=crop",
            description: "High-intensity interval training on stationary bikes featuring alternating periods of maximum effort sprints and active recovery. Maximize calorie burn and improve anaerobic fitness.",
        }, {
            name: "Endurance Ride",
            image: "https://images.unsplash.com/photo-1637578371283-d9076f66ba8e?w=400&h=220&fit=crop",
            description: "Longer, steady-state cycling sessions (45-60 minutes) designed to build aerobic capacity, mental resilience, and cardiovascular endurance through sustained moderate-intensity efforts.",
        }, {
            name: "Rhythm Ride",
            image: "https://images.unsplash.com/photo-1625594755684-a73285a64f66?w=400&h=220&fit=crop",
            description: "Music-driven cycling experience combining choreographed upper body movements with pedaling rhythms. Dance on the bike while getting an amazing cardio workout in this fun, party-like atmosphere.",
        }],
    },
    {
        id: "pilates",
        name: "Pilates",
        image: "https://images.unsplash.com/photo-1717500252179-2811af29e4f7?w=600&h=330&fit=crop",
        shortDescription: ["Pilates is a low-impact exercise method focusing on core strength, flexibility, and body awareness. It uses precise movements and controlled breathing to improve posture, balance, and muscle tone."],
        description: "Low-impact exercise method emphasizing core strength, flexibility, and whole-body awareness through precise, controlled movements. Improve posture, balance, muscle tone, and mental focus using both traditional mat work and specialized equipment.",
        backgroundImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop",
        subprograms: [{
            name: "Mat Pilates",
            image: "https://images.unsplash.com/photo-1600881333290-31fdbdfbe493?w=400&h=220&fit=crop",
            description: "Traditional floor-based Pilates using body weight resistance and gravity. Focus on core stabilization, postural alignment, and fundamental movement patterns accessible to all fitness levels.",
        }, {
            name: "Reformer Pilates",
            image: "https://images.unsplash.com/photo-1717500252573-d31d4bf5ddf1?w=400&h=220&fit=crop",
            description: "Equipment-based training using the Pilates reformer with spring resistance and pulley systems. Provides enhanced support and variable resistance for more precise, challenging movements.",
        }, {
            name: "Pilates Fusion",
            image: "https://images.unsplash.com/photo-1591258370814-01609b341790?w=400&h=220&fit=crop",
            description: "Creative blend combining Pilates principles with yoga poses, barre techniques, and functional movement. Dynamic full-body conditioning that challenges strength, flexibility, and coordination.",
        }, {
            name: "Clinical Pilates",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=220&fit=crop",
            description: "Therapeutic approach designed for injury rehabilitation, chronic pain management, and movement dysfunction correction. Small group classes with individualized modifications and professional guidance.",
        }],
    },
];

export function getProgramById(id) {
    return ProgramsInfo.find(program => program.id === id);
}

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
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=360&fit=crop",
        image2: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=360&fit=crop",
        cta: "Book a Session",
    },
    {
        id: "sarah",
        name: "Sarah Martinez",
        tagline: "Yoga & Pilates Instructor",
        title: "MINDFUL MOVEMENT SPECIALIST",
        shortDescription: "Transform your body and mind through flowing movements. Discover strength, flexibility, and inner peace.",
        description: "Sarah is a certified yoga and Pilates instructor with 8 years of experience helping clients build core strength, flexibility, and mental clarity. She combines traditional techniques with modern approaches to create balanced, restorative workouts that nurture both body and spirit.",
        about: "Sarah brings a holistic approach to fitness, emphasizing the connection between physical strength and mental wellness. Her classes blend challenging movements with mindful breathing, creating sessions that strengthen your body while calming your mind. Whether you're a beginner seeking foundation or an advanced practitioner looking to deepen your practice, Sarah provides personalized guidance in a supportive environment.",
        actions: [{icon: "🧘", label: "Yoga"}, {icon: "💆", label: "Recovery"}, {
            icon: "🌱", label: "Wellness"
        }, {icon: "📱", label: "Virtual"}],
        profilePicture: "https://randomuser.me/api/portraits/women/45.jpg",
        image: "https://images.unsplash.com/uploads/1413395496082cbc91228/43e39040?w=500&h=360&fit=crop",
        image2: "https://images.unsplash.com/photo-1606487704494-4e2fa9969cb5?w=500&h=360&fit=crop",
        cta: "Start Your Journey",
    },
    {
        id: "marcus",
        name: "Marcus Thompson",
        tagline: "Athletic Performance Coach",
        title: "SPORTS & CONDITIONING EXPERT",
        shortDescription: "Unlock your athletic potential with sport-specific training designed for peak performance and injury prevention.",
        description: "Marcus is a former collegiate athlete turned performance coach with 12 years of experience training professional and amateur athletes. He specializes in sport-specific conditioning, explosive power development, and functional movement patterns that translate directly to athletic performance.",
        about: "Marcus understands what it takes to compete at the highest level. His training philosophy focuses on building athletes who are not only strong and fast, but also resilient and injury-resistant. Using cutting-edge techniques in plyometrics, agility training, and recovery protocols, Marcus helps athletes of all levels reach their competitive goals while maintaining long-term health.",
        actions: [{icon: "⚡", label: "Speed"}, {icon: "🏆", label: "Performance"}, {
            icon: "🔥", label: "Conditioning"
        }, {icon: "🎯", label: "Sport-Specific"}],
        profilePicture: "https://randomuser.me/api/portraits/men/67.jpg",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=360&fit=crop",
        image2: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&h=360&fit=crop",
        cta: "Train Like a Pro",
    },
    {
        id: "elena",
        name: "Elena Rodriguez",
        tagline: "Weight Loss Specialist",
        title: "TRANSFORMATION COACH",
        shortDescription: "Sustainable weight loss through balanced nutrition and enjoyable workouts. Your healthiest self awaits.",
        description: "Elena is a certified nutritionist and personal trainer with 9 years of experience helping clients achieve lasting weight loss results. She focuses on creating sustainable lifestyle changes rather than quick fixes, combining effective workouts with practical nutrition guidance.",
        about: "Elena believes that successful weight loss is about more than just numbers on a scale – it's about building healthy habits that last a lifetime. Her compassionate approach helps clients overcome mental barriers while developing a positive relationship with food and exercise. Through personalized meal planning, progressive workout routines, and ongoing support, Elena guides clients toward their transformation goals at a sustainable pace.",
        actions: [{icon: "⚖️", label: "Weight Loss"}, {icon: "🥗", label: "Meal Plans"}, {
            icon: "📊", label: "Progress"
        }, {icon: "💝", label: "Support"}],
        profilePicture: "https://randomuser.me/api/portraits/women/28.jpg",
        image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500&h=360&fit=fit",
        image2: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500&h=360&fit=crop",
        cta: "Transform Today",
    },
    {
        id: "alex",
        name: "Alex Chen",
        tagline: "Functional Fitness Expert",
        title: "MOVEMENT & MOBILITY COACH",
        shortDescription: "Build real-world strength through functional movements that improve your daily life and prevent injury.",
        description: "Alex is a movement specialist with 7 years of experience in functional fitness and corrective exercise. He helps clients develop strength, mobility, and coordination through exercises that mirror real-life activities, creating bodies that move better in everyday situations.",
        about: "Alex's philosophy centers on training movement patterns rather than just muscles. His background in physical therapy and strength coaching allows him to identify and correct movement dysfunctions while building functional strength. Whether you're recovering from injury, looking to improve posture, or wanting to move with more confidence in daily activities, Alex creates programs that address your specific needs and movement goals.",
        actions: [{icon: "🤸", label: "Mobility"}, {icon: "🛠️", label: "Corrective"}, {
            icon: "🎭", label: "Functional"
        }, {icon: "⚡", label: "Movement"}],
        profilePicture: "https://randomuser.me/api/portraits/men/23.jpg",
        image: "https://images.unsplash.com/photo-1704375058325-e51b6382a95d?w=500&h=360&fit=fit",
        image2: "https://images.unsplash.com/photo-1639496908204-6f949b0f46e1?w=500&h=360&fit=crop",
        cta: "Move Better",
    },
    {
        id: "jessica",
        name: "Jessica Williams",
        tagline: "Senior Fitness Specialist",
        title: "ACTIVE AGING COACH",
        shortDescription: "Stay strong, mobile, and independent with age-appropriate fitness programs designed for active living.",
        description: "Jessica specializes in fitness for adults 50+ with 11 years of experience in senior wellness and rehabilitation. She creates safe, effective programs that help mature adults maintain strength, balance, and vitality while addressing age-related health concerns.",
        about: "Jessica is passionate about helping seniors live their most active and independent lives. Her gentle yet effective approach focuses on maintaining bone density, improving balance, and preserving functional strength. With certifications in senior fitness and fall prevention, Jessica designs programs that are both challenging and safe, proving that age is just a number when it comes to staying fit and healthy.",
        actions: [{icon: "🎯", label: "Balance"}, {icon: "🦴", label: "Bone Health"}, {
            icon: "🚶", label: "Mobility"
        }, {icon: "❤️", label: "Heart Health"}],
        profilePicture: "https://randomuser.me/api/portraits/women/52.jpg",
        image: "https://images.unsplash.com/photo-1692372372810-c848c9cca1c5?w=500&h=360&fit=fit",
        image2: "https://images.unsplash.com/photo-1617293378985-d7fae23773b0?w=500&h=360&fit=crop",
        cta: "Stay Active",
    },
    {
        id: "david",
        name: "David Kim",
        tagline: "Strength Training Expert",
        title: "POWERLIFTING & BODYBUILDING COACH",
        shortDescription: "Build serious muscle and strength with proven powerlifting and bodybuilding techniques.",
        description: "David is a competitive powerlifter and certified strength coach with 15 years of experience in serious strength training. He specializes in progressive overload, compound movements, and advanced training techniques for clients looking to maximize muscle growth and strength gains.",
        about: "David's expertise lies in the science of getting stronger. As a former competitive powerlifter, he understands what it takes to build impressive strength and muscle mass. His methodical approach to programming ensures consistent progress while minimizing injury risk. Whether you're a beginner looking to build your first pull-up or an experienced lifter chasing new personal records, David provides the technical knowledge and motivation to reach your strength goals.",
        actions: [{icon: "🏋️", label: "Powerlifting"}, {icon: "💪", label: "Muscle Building"}, {
            icon: "📈", label: "Progression"
        }, {icon: "🏆", label: "Competition"}],
        profilePicture: "https://randomuser.me/api/portraits/men/41.jpg",
        image: "https://images.unsplash.com/photo-1636007596622-90bf5679f5dc?w=500&h=360&fit=fit",
        image2: "https://images.unsplash.com/photo-1744551472900-d23f4997e1cd?w=500&h=360&fit=fit",
        cta: "Get Stronger",
    },
    {
        id: "maya",
        name: "Maya Patel",
        tagline: "HIIT & Circuit Training",
        title: "HIGH-INTENSITY SPECIALIST",
        shortDescription: "Maximize your workout efficiency with intense, fun circuits that deliver results in minimal time.",
        description: "Maya is a high-energy fitness instructor with 6 years of experience in HIIT, circuit training, and group fitness. She creates dynamic, time-efficient workouts that combine strength, cardio, and flexibility training for maximum calorie burn and fitness improvement.",
        about: "Maya brings infectious energy and creativity to every workout. Her background in dance and martial arts influences her dynamic training style, making even the most challenging workouts feel like fun. Maya specializes in helping busy professionals achieve their fitness goals through efficient, varied workouts that prevent boredom and plateaus. Her circuits are designed to improve all aspects of fitness while keeping you engaged and motivated.",
        actions: [{icon: "⚡", label: "HIIT"}, {icon: "🔄", label: "Circuits"}, {
            icon: "⏱️", label: "Efficient"
        }, {icon: "🎵", label: "Fun"}],
        profilePicture: "https://randomuser.me/api/portraits/women/36.jpg",
        image: "https://images.unsplash.com/photo-1598575435251-574ba3ba7ad3?w=500&h=360&fit=fit",
        image2: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&h=360&fit=crop",
        cta: "Burn & Build",
    }
];

export function getTrainerById(id) {
    return trainers.find(trainer => trainer.id === id);
}

export const trainerAvailability = [
    // George Lechapé - Strength & Cardio Coach
    { id: "george-2025-06-09-09", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-09T09:00:00", end: "2025-06-09T10:00:00", color: "#4c9be8", status: "available" },
    { id: "george-2025-06-09-10", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-09T10:00:00", end: "2025-06-09T11:00:00", color: "#4c9be8", status: "booked" },
    { id: "george-2025-06-09-14", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-09T14:00:00", end: "2025-06-09T15:00:00", color: "#4c9be8", status: "available" },
    { id: "george-2025-06-09-15", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-09T15:00:00", end: "2025-06-09T16:00:00", color: "#4c9be8", status: "available" },
    { id: "george-2025-06-10-08", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-10T08:00:00", end: "2025-06-10T09:00:00", color: "#4c9be8", status: "booked" },
    { id: "george-2025-06-10-16", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-10T16:00:00", end: "2025-06-10T17:00:00", color: "#4c9be8", status: "available" },

    // Sarah Martinez - Yoga & Pilates Specialist
    { id: "sarah-2025-06-09-07", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-09T07:00:00", end: "2025-06-09T08:00:00", color: "#e84c8b", status: "available" },
    { id: "sarah-2025-06-09-11", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-09T11:00:00", end: "2025-06-09T12:00:00", color: "#e84c8b", status: "booked" },
    { id: "sarah-2025-06-09-17", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-09T17:00:00", end: "2025-06-09T18:00:00", color: "#e84c8b", status: "available" },
    { id: "sarah-2025-06-09-18", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-09T18:00:00", end: "2025-06-09T19:00:00", color: "#e84c8b", status: "available" },
    { id: "sarah-2025-06-10-07", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-10T07:00:00", end: "2025-06-10T08:00:00", color: "#e84c8b", status: "available" },
    { id: "sarah-2025-06-10-19", type: "personal trainer", subType: "Sarah Martinez", title: "PT: Sarah Martinez", start: "2025-06-10T19:00:00", end: "2025-06-10T20:00:00", color: "#e84c8b", status: "booked" },

    // Marcus Thompson - Athletic Performance Coach
    { id: "marcus-2025-06-09-08", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-09T08:00:00", end: "2025-06-09T09:00:00", color: "#ff6b35", status: "available" },
    { id: "marcus-2025-06-09-12", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-09T12:00:00", end: "2025-06-09T13:00:00", color: "#ff6b35", status: "available" },
    { id: "marcus-2025-06-09-13", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-09T13:00:00", end: "2025-06-09T14:00:00", color: "#ff6b35", status: "booked" },
    { id: "marcus-2025-06-09-16", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-09T16:00:00", end: "2025-06-09T17:00:00", color: "#ff6b35", status: "available" },
    { id: "marcus-2025-06-10-06", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-10T06:00:00", end: "2025-06-10T07:00:00", color: "#ff6b35", status: "booked" },
    { id: "marcus-2025-06-10-15", type: "personal trainer", subType: "Marcus Thompson", title: "PT: Marcus Thompson", start: "2025-06-10T15:00:00", end: "2025-06-10T16:00:00", color: "#ff6b35", status: "available" },

    // Elena Rodriguez - Weight Loss Specialist
    { id: "elena-2025-06-09-06", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-09T06:00:00", end: "2025-06-09T07:00:00", color: "#8bc34a", status: "available" },
    { id: "elena-2025-06-09-09", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-09T09:00:00", end: "2025-06-09T10:00:00", color: "#8bc34a", status: "available" },
    { id: "elena-2025-06-09-13", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-09T13:00:00", end: "2025-06-09T14:00:00", color: "#8bc34a", status: "booked" },
    { id: "elena-2025-06-09-19", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-09T19:00:00", end: "2025-06-09T20:00:00", color: "#8bc34a", status: "available" },
    { id: "elena-2025-06-10-09", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-10T09:00:00", end: "2025-06-10T10:00:00", color: "#8bc34a", status: "booked" },
    { id: "elena-2025-06-10-18", type: "personal trainer", subType: "Elena Rodriguez", title: "PT: Elena Rodriguez", start: "2025-06-10T18:00:00", end: "2025-06-10T19:00:00", color: "#8bc34a", status: "available" },

    // Alex Chen - Functional Fitness Expert
    { id: "alex-2025-06-09-10", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-09T10:00:00", end: "2025-06-09T11:00:00", color: "#9c27b0", status: "available" },
    { id: "alex-2025-06-09-11", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-09T11:00:00", end: "2025-06-09T12:00:00", color: "#9c27b0", status: "available" },
    { id: "alex-2025-06-09-15", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-09T15:00:00", end: "2025-06-09T16:00:00", color: "#9c27b0", status: "booked" },
    { id: "alex-2025-06-09-20", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-09T20:00:00", end: "2025-06-09T21:00:00", color: "#9c27b0", status: "available" },
    { id: "alex-2025-06-10-11", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-10T11:00:00", end: "2025-06-10T12:00:00", color: "#9c27b0", status: "available" },
    { id: "alex-2025-06-10-17", type: "personal trainer", subType: "Alex Chen", title: "PT: Alex Chen", start: "2025-06-10T17:00:00", end: "2025-06-10T18:00:00", color: "#9c27b0", status: "booked" },

    // Jessica Williams - Senior Fitness Specialist
    { id: "jessica-2025-06-09-09", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-09T09:00:00", end: "2025-06-09T10:00:00", color: "#ffc107", status: "available" },
    { id: "jessica-2025-06-09-10", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-09T10:00:00", end: "2025-06-09T11:00:00", color: "#ffc107", status: "available" },
    { id: "jessica-2025-06-09-14", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-09T14:00:00", end: "2025-06-09T15:00:00", color: "#ffc107", status: "booked" },
    { id: "jessica-2025-06-09-16", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-09T16:00:00", end: "2025-06-09T17:00:00", color: "#ffc107", status: "available" },
    { id: "jessica-2025-06-10-10", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-10T10:00:00", end: "2025-06-10T11:00:00", color: "#ffc107", status: "available" },
    { id: "jessica-2025-06-10-14", type: "personal trainer", subType: "Jessica Williams", title: "PT: Jessica Williams", start: "2025-06-10T14:00:00", end: "2025-06-10T15:00:00", color: "#ffc107", status: "booked" },

    // David Kim - Strength Training Expert
    { id: "david-2025-06-09-06", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-09T06:00:00", end: "2025-06-09T07:00:00", color: "#607d8b", status: "available" },
    { id: "david-2025-06-09-07", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-09T07:00:00", end: "2025-06-09T08:00:00", color: "#607d8b", status: "booked" },
    { id: "david-2025-06-09-17", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-09T17:00:00", end: "2025-06-09T18:00:00", color: "#607d8b", status: "available" },
    { id: "david-2025-06-09-18", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-09T18:00:00", end: "2025-06-09T19:00:00", color: "#607d8b", status: "available" },
    { id: "david-2025-06-10-06", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-10T06:00:00", end: "2025-06-10T07:00:00", color: "#607d8b", status: "booked" },
    { id: "david-2025-06-10-19", type: "personal trainer", subType: "David Kim", title: "PT: David Kim", start: "2025-06-10T19:00:00", end: "2025-06-10T20:00:00", color: "#607d8b", status: "available" },

    // Maya Patel - HIIT & Circuit Training
    { id: "maya-2025-06-09-08", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-09T08:00:00", end: "2025-06-09T09:00:00", color: "#e91e63", status: "available" },
    { id: "maya-2025-06-09-12", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-09T12:00:00", end: "2025-06-09T13:00:00", color: "#e91e63", status: "available" },
    { id: "maya-2025-06-09-17", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-09T17:00:00", end: "2025-06-09T18:00:00", color: "#e91e63", status: "booked" },
    { id: "maya-2025-06-09-19", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-09T19:00:00", end: "2025-06-09T20:00:00", color: "#e91e63", status: "available" },
    { id: "maya-2025-06-10-08", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-10T08:00:00", end: "2025-06-10T09:00:00", color: "#e91e63", status: "available" },
    { id: "maya-2025-06-10-12", type: "personal trainer", subType: "Maya Patel", title: "PT: Maya Patel", start: "2025-06-10T12:00:00", end: "2025-06-10T13:00:00", color: "#e91e63", status: "booked" }
];

export function getTrainerAvailabilityByName(name) {
    return trainerAvailability.filter(ev => ev.subType === name);
}

export const AllCourse = [
    // CROSSFIT PROGRAMS
    // Open Gym Sessions
    {
        id: "crf-cf-og-2025-06-09-06",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Open Gym",
        title: "Open Gym",
        start: "2025-06-09T06:00:00",
        end: "2025-06-09T08:00:00",
        color: "#FF5733",
        status: "8/15"
    },
    {
        id: "crf-cf-og-2025-06-09-18",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Open Gym",
        title: "Open Gym",
        start: "2025-06-09T18:00:00",
        end: "2025-06-09T20:00:00",
        color: "#FF5733",
        status: "12/15"
    },
    {
        id: "crf-cf-og-2025-06-10-06",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Open Gym",
        title: "Open Gym",
        start: "2025-06-10T06:00:00",
        end: "2025-06-10T08:00:00",
        color: "#FF5733",
        status: "5/15"
    },
    {
        id: "crf-cf-og-2025-06-11-19",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Open Gym",
        title: "Open Gym",
        start: "2025-06-11T19:00:00",
        end: "2025-06-11T21:00:00",
        color: "#FF5733",
        status: "9/15"
    },

    // Circuit Fit Classes
    {
        id: "crf-cf-cf-2025-06-09-10",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Circuit Fit",
        title: "Circuit Fit",
        start: "2025-06-09T10:00:00",
        end: "2025-06-09T11:00:00",
        color: "#FF5733",
        status: "full"
    },
    {
        id: "crf-cf-cf-2025-06-09-17",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Circuit Fit",
        title: "Circuit Fit",
        start: "2025-06-09T17:00:00",
        end: "2025-06-09T18:00:00",
        color: "#FF5733",
        status: "11/12"
    },
    {
        id: "crf-cf-cf-2025-06-10-09",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Circuit Fit",
        title: "Circuit Fit",
        start: "2025-06-10T09:00:00",
        end: "2025-06-10T10:00:00",
        color: "#FF5733",
        status: "7/12"
    },
    {
        id: "crf-cf-cf-2025-06-11-18",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Circuit Fit",
        title: "Circuit Fit",
        start: "2025-06-11T18:00:00",
        end: "2025-06-11T19:00:00",
        color: "#FF5733",
        status: "9/12"
    },

    // Power Fit Classes
    {
        id: "crf-cf-pf-2025-06-09-07",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Power Fit",
        title: "Power Fit",
        start: "2025-06-09T07:00:00",
        end: "2025-06-09T08:00:00",
        color: "#FF5733",
        status: "6/10"
    },
    {
        id: "crf-cf-pf-2025-06-10-19",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Power Fit",
        title: "Power Fit",
        start: "2025-06-10T19:00:00",
        end: "2025-06-10T20:00:00",
        color: "#FF5733",
        status: "full"
    },
    {
        id: "crf-cf-pf-2025-06-12-08",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Power Fit",
        title: "Power Fit",
        start: "2025-06-12T08:00:00",
        end: "2025-06-12T09:00:00",
        color: "#FF5733",
        status: "4/10"
    },

    // Total Fit Classes
    {
        id: "crf-cf-tf-2025-06-09-12",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Total Fit",
        title: "Total Fit",
        start: "2025-06-09T12:00:00",
        end: "2025-06-09T13:30:00",
        color: "#FF5733",
        status: "8/14"
    },
    {
        id: "crf-cf-tf-2025-06-11-17",
        type: "programs",
        subType: "Cross Fit",
        subSubType: "Total Fit",
        title: "Total Fit",
        start: "2025-06-11T17:00:00",
        end: "2025-06-11T18:30:00",
        color: "#FF5733",
        status: "12/14"
    },

    // YOGA PROGRAMS
    // Hatha Yoga Classes
    {
        id: "yg-hy-2025-06-09-08",
        type: "programs",
        subType: "Yoga",
        subSubType: "Hatha Yoga",
        title: "Hatha Yoga",
        start: "2025-06-09T08:00:00",
        end: "2025-06-09T09:15:00",
        color: "#8E44AD",
        status: "6/15"
    },
    {
        id: "yg-hy-2025-06-10-18",
        type: "programs",
        subType: "Yoga",
        subSubType: "Hatha Yoga",
        title: "Hatha Yoga",
        start: "2025-06-10T18:00:00",
        end: "2025-06-10T19:15:00",
        color: "#8E44AD",
        status: "11/15"
    },
    {
        id: "yg-hy-2025-06-12-10",
        type: "programs",
        subType: "Yoga",
        subSubType: "Hatha Yoga",
        title: "Hatha Yoga",
        start: "2025-06-12T10:00:00",
        end: "2025-06-12T11:15:00",
        color: "#8E44AD",
        status: "9/15"
    },

    // Vinyasa Flow Classes
    {
        id: "yg-vf-2025-06-09-09",
        type: "programs",
        subType: "Yoga",
        subSubType: "Vinyasa Flow",
        title: "Vinyasa Flow",
        start: "2025-06-09T09:30:00",
        end: "2025-06-09T10:45:00",
        color: "#8E44AD",
        status: "full"
    },
    {
        id: "yg-vf-2025-06-10-17",
        type: "programs",
        subType: "Yoga",
        subSubType: "Vinyasa Flow",
        title: "Vinyasa Flow",
        start: "2025-06-10T17:00:00",
        end: "2025-06-10T18:15:00",
        color: "#8E44AD",
        status: "13/16"
    },
    {
        id: "yg-vf-2025-06-11-19",
        type: "programs",
        subType: "Yoga",
        subSubType: "Vinyasa Flow",
        title: "Vinyasa Flow",
        start: "2025-06-11T19:30:00",
        end: "2025-06-11T20:45:00",
        color: "#8E44AD",
        status: "8/16"
    },

    // Yin Yoga Classes
    {
        id: "yg-yn-2025-06-09-19",
        type: "programs",
        subType: "Yoga",
        subSubType: "Yin Yoga",
        title: "Yin Yoga",
        start: "2025-06-09T19:00:00",
        end: "2025-06-09T20:15:00",
        color: "#8E44AD",
        status: "7/12"
    },
    {
        id: "yg-yn-2025-06-11-11",
        type: "programs",
        subType: "Yoga",
        subSubType: "Yin Yoga",
        title: "Yin Yoga",
        start: "2025-06-11T11:00:00",
        end: "2025-06-11T12:15:00",
        color: "#8E44AD",
        status: "5/12"
    },
    {
        id: "yg-yn-2025-06-13-18",
        type: "programs",
        subType: "Yoga",
        subSubType: "Yin Yoga",
        title: "Yin Yoga",
        start: "2025-06-13T18:00:00",
        end: "2025-06-13T19:15:00",
        color: "#8E44AD",
        status: "9/12"
    },

    // Power Yoga Classes
    {
        id: "yg-py-2025-06-10-07",
        type: "programs",
        subType: "Yoga",
        subSubType: "Power Yoga",
        title: "Power Yoga",
        start: "2025-06-10T07:00:00",
        end: "2025-06-10T08:15:00",
        color: "#8E44AD",
        status: "10/14"
    },
    {
        id: "yg-py-2025-06-12-17",
        type: "programs",
        subType: "Yoga",
        subSubType: "Power Yoga",
        title: "Power Yoga",
        start: "2025-06-12T17:00:00",
        end: "2025-06-12T18:15:00",
        color: "#8E44AD",
        status: "full"
    },

    // SPINNING PROGRAMS
    // Spin Basics Classes
    {
        id: "sp-sb-2025-06-09-06",
        type: "programs",
        subType: "Spinning",
        subSubType: "Spin Basics",
        title: "Spin Basics",
        start: "2025-06-09T06:30:00",
        end: "2025-06-09T07:30:00",
        color: "#3498DB",
        status: "4/12"
    },
    {
        id: "sp-sb-2025-06-11-10",
        type: "programs",
        subType: "Spinning",
        subSubType: "Spin Basics",
        title: "Spin Basics",
        start: "2025-06-11T10:00:00",
        end: "2025-06-11T11:00:00",
        color: "#3498DB",
        status: "7/12"
    },
    {
        id: "sp-sb-2025-06-13-19",
        type: "programs",
        subType: "Spinning",
        subSubType: "Spin Basics",
        title: "Spin Basics",
        start: "2025-06-13T19:00:00",
        end: "2025-06-13T20:00:00",
        color: "#3498DB",
        status: "6/12"
    },

    // HIIT Spin Classes
    {
        id: "sp-hs-2025-06-09-18",
        type: "programs",
        subType: "Spinning",
        subSubType: "HIIT Spin",
        title: "HIIT Spin",
        start: "2025-06-09T18:30:00",
        end: "2025-06-09T19:15:00",
        color: "#3498DB",
        status: "full"
    },
    {
        id: "sp-hs-2025-06-10-12",
        type: "programs",
        subType: "Spinning",
        subSubType: "HIIT Spin",
        title: "HIIT Spin",
        start: "2025-06-10T12:00:00",
        end: "2025-06-10T12:45:00",
        color: "#3498DB",
        status: "9/16"
    },
    {
        id: "sp-hs-2025-06-12-18",
        type: "programs",
        subType: "Spinning",
        subSubType: "HIIT Spin",
        title: "HIIT Spin",
        start: "2025-06-12T18:00:00",
        end: "2025-06-12T18:45:00",
        color: "#3498DB",
        status: "14/16"
    },

    // Endurance Ride Classes
    {
        id: "sp-er-2025-06-10-08",
        type: "programs",
        subType: "Spinning",
        subSubType: "Endurance Ride",
        title: "Endurance Ride",
        start: "2025-06-10T08:00:00",
        end: "2025-06-10T09:00:00",
        color: "#3498DB",
        status: "8/14"
    },
    {
        id: "sp-er-2025-06-11-17",
        type: "programs",
        subType: "Spinning",
        subSubType: "Endurance Ride",
        title: "Endurance Ride",
        start: "2025-06-11T17:00:00",
        end: "2025-06-11T18:00:00",
        color: "#3498DB",
        status: "11/14"
    },

    // Rhythm Ride Classes
    {
        id: "sp-rr-2025-06-09-11",
        type: "programs",
        subType: "Spinning",
        subSubType: "Rhythm Ride",
        title: "Rhythm Ride",
        start: "2025-06-09T11:00:00",
        end: "2025-06-09T12:00:00",
        color: "#3498DB",
        status: "12/18"
    },
    {
        id: "sp-rr-2025-06-12-19",
        type: "programs",
        subType: "Spinning",
        subSubType: "Rhythm Ride",
        title: "Rhythm Ride",
        start: "2025-06-12T19:00:00",
        end: "2025-06-12T20:00:00",
        color: "#3498DB",
        status: "15/18"
    },
    {
        id: "sp-rr-2025-06-13-17",
        type: "programs",
        subType: "Spinning",
        subSubType: "Rhythm Ride",
        title: "Rhythm Ride",
        start: "2025-06-13T17:00:00",
        end: "2025-06-13T18:00:00",
        color: "#3498DB",
        status: "full"
    },

    // PILATES PROGRAMS
    // Mat Pilates Classes
    {
        id: "pl-mp-2025-06-09-08",
        type: "programs",
        subType: "Pilates",
        subSubType: "Mat Pilates",
        title: "Mat Pilates",
        start: "2025-06-09T08:00:00",
        end: "2025-06-09T09:00:00",
        color: "#E67E22",
        status: "9/15"
    },
    {
        id: "pl-mp-2025-06-10-11",
        type: "programs",
        subType: "Pilates",
        subSubType: "Mat Pilates",
        title: "Mat Pilates",
        start: "2025-06-10T11:00:00",
        end: "2025-06-10T12:00:00",
        color: "#E67E22",
        status: "12/15"
    },
    {
        id: "pl-mp-2025-06-11-18",
        type: "programs",
        subType: "Pilates",
        subSubType: "Mat Pilates",
        title: "Mat Pilates",
        start: "2025-06-11T18:30:00",
        end: "2025-06-11T19:30:00",
        color: "#E67E22",
        status: "6/15"
    },
    {
        id: "pl-mp-2025-06-13-09",
        type: "programs",
        subType: "Pilates",
        subSubType: "Mat Pilates",
        title: "Mat Pilates",
        start: "2025-06-13T09:00:00",
        end: "2025-06-13T10:00:00",
        color: "#E67E22",
        status: "8/15"
    },

    // Reformer Pilates Classes
    {
        id: "pl-rp-2025-06-09-14",
        type: "programs",
        subType: "Pilates",
        subSubType: "Reformer Pilates",
        title: "Reformer Pilates",
        start: "2025-06-09T14:00:00",
        end: "2025-06-09T15:00:00",
        color: "#E67E22",
        status: "full"
    },
    {
        id: "pl-rp-2025-06-10-16",
        type: "programs",
        subType: "Pilates",
        subSubType: "Reformer Pilates",
        title: "Reformer Pilates",
        start: "2025-06-10T16:00:00",
        end: "2025-06-10T17:00:00",
        color: "#E67E22",
        status: "7/8"
    },
    {
        id: "pl-rp-2025-06-12-10",
        type: "programs",
        subType: "Pilates",
        subSubType: "Reformer Pilates",
        title: "Reformer Pilates",
        start: "2025-06-12T10:00:00",
        end: "2025-06-12T11:00:00",
        color: "#E67E22",
        status: "5/8"
    },

    // Pilates Fusion Classes
    {
        id: "pl-pf-2025-06-09-16",
        type: "programs",
        subType: "Pilates",
        subSubType: "Pilates Fusion",
        title: "Pilates Fusion",
        start: "2025-06-09T16:00:00",
        end: "2025-06-09T17:15:00",
        color: "#E67E22",
        status: "10/16"
    },
    {
        id: "pl-pf-2025-06-11-12",
        type: "programs",
        subType: "Pilates",
        subSubType: "Pilates Fusion",
        title: "Pilates Fusion",
        start: "2025-06-11T12:30:00",
        end: "2025-06-11T13:45:00",
        color: "#E67E22",
        status: "13/16"
    },
    {
        id: "pl-pf-2025-06-13-11",
        type: "programs",
        subType: "Pilates",
        subSubType: "Pilates Fusion",
        title: "Pilates Fusion",
        start: "2025-06-13T11:00:00",
        end: "2025-06-13T12:15:00",
        color: "#E67E22",
        status: "7/16"
    },

    // Clinical Pilates Classes
    {
        id: "pl-cp-2025-06-10-14",
        type: "programs",
        subType: "Pilates",
        subSubType: "Clinical Pilates",
        title: "Clinical Pilates",
        start: "2025-06-10T14:00:00",
        end: "2025-06-10T15:00:00",
        color: "#E67E22",
        status: "4/6"
    },
    {
        id: "pl-cp-2025-06-12-15",
        type: "programs",
        subType: "Pilates",
        subSubType: "Clinical Pilates",
        title: "Clinical Pilates",
        start: "2025-06-12T15:00:00",
        end: "2025-06-12T16:00:00",
        color: "#E67E22",
        status: "5/6"
    },
    {
        id: "pl-cp-2025-06-13-14",
        type: "programs",
        subType: "Pilates",
        subSubType: "Clinical Pilates",
        title: "Clinical Pilates",
        start: "2025-06-13T14:00:00",
        end: "2025-06-13T15:00:00",
        color: "#E67E22",
        status: "full"
    }
];

export function getAllEventCourseAndTrainerAvailability() {
    return [...AllCourse, ...trainerAvailability];
}