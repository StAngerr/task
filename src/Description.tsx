import screen1 from './assets/1.png'
import screen2 from './assets/2.png'
import screen3 from './assets/3.jpg'

export const Description = () => {

    return <div>
        <h3>Task:</h3>
        <ul>
            <li>Add svg to the view with tow buttons 'Toggle angle' and 'Select Location Color'</li>
            <li>The toggle angle button should rotate the whole SVG on 180-degree angle smoothly (use animation)</li>
            <li>Select location color should be a select control with three options (Black, Green, Blue pick any shades you want)</li>
            <li>After selecting any of options, highlighted location should change color (rectangle should become red, green or blue)</li>
        </ul>

        <p><b>SVG path:</b> <span>./assets/floor_plan.svg</span></p>
        <p>Use typescript and scss for styles</p>
        <p>Preferable functional components and hooks</p>

        <p>For additional information see screenshots:</p>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc' }} src={screen1} alt=""/>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc'}} src={screen2} alt=""/>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc'}} src={screen3} alt=""/>
    </div>
}