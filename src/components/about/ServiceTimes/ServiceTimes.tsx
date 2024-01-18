'use client'

import {
    LifebuoyIcon,
    NewspaperIcon,
    PhoneIcon,
} from '@heroicons/react/20/solid'
import BackgroundImage from '@/components/about/ServiceTimes/BackgroundImage'
import SubMenu from '@/components/SubMenu'
import ItemDetailsCard from '@/components/about/ServiceTimes/ItemDetailsCard'
import ServiceTimeLocation from '@/components/about/ServiceTimes/ServiceTimeLocation'
import {Container} from '@/components/Container'
import {useState} from "react";

export interface MenuItem {
    index: number
    name: string
    description: string
    icon: any
}

const cards: MenuItem[] = [
    {
        index: 0,
        name: 'Adults',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: PhoneIcon,
    },
    {
        index: 1,
        name: 'Technical Support',
        description:
            'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: LifebuoyIcon,
    },
    {
        index: 2,
        name: 'Media Inquiries',
        description:
            'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: NewspaperIcon,
    },
]

const ServiceTimes = () => {
    const [active, setActive] = useState(0);
    const backgroungImg =
        'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png'
    const image =
        'https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg'
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-600 py-16 sm:py-32 lg:py-16">
                <BackgroundImage src={backgroungImg} alt="Background"/>
                <SubMenu
                    items={cards}
                    active={cards[active] ?? null}
                    onItemClick={(index: number) => setActive(index)}
                />

                <Container className="mt-56">
                    <ItemDetailsCard item={cards[0] ?? null}/>
                </Container>
            </div>
            <ServiceTimeLocation
                time="18:00AM"
                location="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                imageSrc={image}
            />
        </>
    )
}

export default ServiceTimes
