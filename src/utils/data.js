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

export const trainers = [];

export const trainerAvailability = [];