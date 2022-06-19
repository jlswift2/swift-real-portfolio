import Bite from "../../public/images/BITE.png"
import Bubbles from "../../public/images/Bubbles.png"
import Postcard from "../../public/images/Postcard.png"
import BYOB from "../../public/images/BYOB.jpg"

export const projects = [
    {
        name: "Build Your Own Book",
        summary: "A full-stack recipe storing and sharing application equipped with highly customizable input forms, robust search tools, and secure account encryption.",
        img: BYOB,
        languages: [
            "Ruby on Rails",
            "ReactJS",
            "PostgreSQL",
            "AWS",
            "Tailwind"
        ],
        demo: "https://www.youtube.com/watch?v=TKH3xrsJFnM",
        deployed: "",
        github: "https://github.com/jlswift2/swift-final-project"
    },
    {
        name: "Postcard Generator",
        summary: "Postcard Generator is a free service dedicated to providing individuals in hospitals or assisted-living facilities with uplifting cards from caring individuals across the globe.",
        img: Postcard,
        languages: [
            "Ruby on Rails",
            "ReactJS",
            "PostgreSQL",
            "AWS",
            "Fabric.js",
            "Tailwind",
            "Heroku"
        ],
        demo: "",
        deployed: "https://postcard-generator.herokuapp.com/",
        github: "https://github.com/b-vu/postcard-generator"
    },
    {
        name: "BITE",
        summary: "A user-friendly restaurant menu for business owners",
        img: Bite,
        languages: [
            "Ruby",
            "Sinatra",
            "ReactJS",
            "SQLite",
            "Tailwind"
        ],
        demo: "",
        deployed: "",
        github: "https://github.com/jlswift2/phase-3-restaurant-app-frontend"
    },
    {
        name: "Bubbles",
        summary: "A social experience to share your thoughts",
        img: Bubbles,
        languages: [
            "ReactJS",
            "CSS",
            "Heroku"
        ],
        demo: "",
        deployed: "https://guarded-hollows-05759.herokuapp.com/",
        github: "https://github.com/jlswift2/phase-2-project/tree/main/src/components"
    },

]