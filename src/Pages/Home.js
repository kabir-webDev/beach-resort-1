import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export default function Home() {
    return <Hero>
            <Banner title="Luxurious Room" subtitle="Premeum room starting at $333">
                <Link to="/rooms" className="btn-primary">
                    See Rooms
                </Link>
            </Banner>
        </Hero>;
}
