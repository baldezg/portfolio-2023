import './WaveEffect.css';

const WaveEffect: React.FC = () => {
    return(
    <svg version="1.1" className="wave"
    xmlns="http://www.w3.org/200/svg">
   <path
           d="
           M0 67
           C 273,183
             822, -40
             1920,106
           V 600
           H 0
           V 67
           Z
           ">
       <animate
               repeatCount="indefinite"
               attributeName="d"
               dur="60s"
               attributeType="XML"
               values="
                   M0 77
                   C 473, 283
                     822, -40
                     1920, 116
                     V 600
                     H 0
                     V 300
                     Z;
                     M0 77
                     C 473, -40
                     1222, 283
                     1920, 136
                     V 600
                     H 0
                     V 300
                     Z;
                     M0 77
                     C 973, 260
                     1722, -53
                     1920, 120
                     V 600
                     H 0
                     V 300
                     Z;
                     M0 77
                     C 473, 283
                     822, -40
                     1920, 116
                     V 600
                     H 0
                     V 300
                     Z">
       </animate>
   </path>
</svg>
    );
}
export default WaveEffect;