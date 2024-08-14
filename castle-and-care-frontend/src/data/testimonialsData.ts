import TestimonialImage1 from "../images/testimonial1.png"



interface Testimonial {
    userName: string;
    title: string;
    imgSrc: string;
    testimonial: string;
}

const TestimonialsData: Testimonial[] = [
    {
        userName: "Jane Smith",
        title: "Volunteer",
        imgSrc: TestimonialImage1,
        testimonial: "Being part of this NGO's mission has been an enriching experience that has deeply touched my heart. Their commitment to social justice and equity is evident in every initiative they undertake.",
    },
    {
        userName: "Tolulope Oduba",
        title: "Volunteer",
        imgSrc: TestimonialImage1,
        testimonial: "The outreach programs offered by this NGO have been nothing short of life-changing. Their commitment to making a difference is evident in every project they undertake. I am grateful for their unwavering support.",
    },
    {
        userName: "Michael Odunjo",
        title: "Beneficiary",
        imgSrc: TestimonialImage1,
        testimonial: "Reflecting on my experience with this NGO fills me with profound gratitude and admiration. During a period of great adversity in my life, they were like a beacon of hope, extending their unwavering support and compassion to me and my family.",
    },
    {
        userName: "Tony Tetuila",
        title: "Sponsor",
        imgSrc: TestimonialImage1,
        testimonial: "I've had the privilege of witnessing the profound impact this NGO has on the community firsthand, and it's nothing short of inspiring. Their holistic approach to social change focuses not only on addressing immediate needs but also on fostering long-term sustainability and empowerment.",
    },
    // {
    //     userName: "Anon",
    //     title: "Volunteer",
    //     imgSrc: "SomeImagePath5",
    //     testimonial: "Being part of this NGO's mission has been an enriching experience that has deeply touched my heart. Their commitment to social justice and equity is evident in every initiative they undertake. From providing essential services to advocating for systemic change, they are tireless champions of the marginalized and voiceless.",
    // },
];

export default TestimonialsData;
