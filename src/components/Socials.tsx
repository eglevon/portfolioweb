type SocialsProps = {
    name: string;
    link: string;
    img: string;
};

function Socials({ name, link, img }: SocialsProps) {
    return (
        <li>
            <a href={link}>
                <img src={img} alt={name} />
            </a>
        </li>
    );
}

export default Socials;
