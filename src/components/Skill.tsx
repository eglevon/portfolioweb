import useDarkMode from '../hooks/useDarkMode';

type SkillProps = {
    name: string;
    img: string;
    imgDark: string;
};

function Skill({ name, img, imgDark }: SkillProps) {
    const { isDarkMode } = useDarkMode();

    return (
        <li>
            <img src={isDarkMode ? imgDark : img} alt={name} />
            <span>{name}</span>
        </li>
    );
}

export default Skill;
