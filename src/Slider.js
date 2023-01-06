import ReactSlider from "react-slider";
import './Slider.css'

const Slider = () => {
  return (
 
    <ReactSlider
    min={0}
    max={9}
    className="horizontal-slider"
    markClassName="example-mark"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 9]}
    ariaLabel={['Lower thumb', 'Upper Thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={0}
/>
  );
};
export default Slider;