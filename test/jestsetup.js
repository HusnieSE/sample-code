import Enzyme, { shallow, render, moount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

test('render a label', () => {
    const wrapper = shallow (
        <Label> Hello Jest! </Label>
    );
    expect(wrapper).toMatchSnapshot();
});

test('render a small label', () => {
    const wrapper = shallow(
        <Label small> Hello Jest! </Label>
    );
    expect(wrapper).toMatchSnapshot();
});