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
export const ProgramsInfo = [
    {
        id: "crossfit",
        name: "Cross Fit",
        image: "https://picsum.photos/170/120",
        shortDescription: ["CrossFit is a high-intensity fitness program that combines elements of weightlifting, gymnastics, and cardiovascular training. It focuses on functional movements and is designed to improve overall fitness through varied daily workouts."],
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
    },
    {
        id: "yoga",
        name: "Yoga",
        image: "https://picsum.photos/170/120?random=1",
        shortDescription: ["Yoga is a mind-body practice that combines physical postures, breathing techniques, and meditation. It improves flexibility, strength, and mental well-being through ancient traditions adapted for modern life."],
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
    },
    {
        id: "spinning",
        name: "Spinning",
        image: "https://picsum.photos/170/120?random=2",
        shortDescription: ["Spinning is a high-energy indoor cycling workout that combines music, motivation, and expert instruction. It builds cardiovascular endurance, strengthens legs, and burns calories in a fun group setting."],
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
    },
    {
        id: "pilates",
        name: "Pilates",
        image: "https://picsum.photos/170/120?random=3",
        shortDescription: ["Pilates is a low-impact exercise method focusing on core strength, flexibility, and body awareness. It uses precise movements and controlled breathing to improve posture, balance, and muscle tone."],
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
        image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3768043/pexels-photo-3768043.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&w=500&h=360&fit=crop",
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
        image: "https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/3775166/pexels-photo-3775166.jpeg?auto=compress&w=500&h=360&fit=crop",
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
    // Programs events
    { id: "fop", type: "programs", subType: "Fitness Classes", subSubType: "Open Fit", title: "Open Fit", start: "2025-06-07T14:00:00", end: "2025-06-07T15:00:00", color: "#2E3B9A", status: "2/10" },
    { id: "fy", type: "programs", subType: "Fitness Classes", subSubType: "Yoga", title: "Yoga", start: "2025-06-06T16:00:00", end: "2025-06-06T17:00:00", color: "#4CA745", status: "full" },
    { id: "aaaa", type: "programs", subType: "Cross Fit", subSubType: "Circuit Fit", title: "Circuit Fit", start: "2025-06-09T10:00:00", end: "2025-06-09T11:00:00", color: "#FF5733", status: "full" },
];

export function getAllEventCourseAndTrainerAvailability() {
    return [...AllCourse, ...trainerAvailability];
}