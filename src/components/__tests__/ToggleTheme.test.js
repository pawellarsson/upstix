import { render } from '@testing-library/react';
import ToggleTheme from '../ToggleTheme';

describe("Test of ToggleTheme", () => {
    let component;
    beforeEach(() => {
        component = render(<ToggleTheme />);
    });

   it("Test toggle theme", () => {
    expect(wrapper.find('body').prop('style')).toHaveProperty('backgroundColor', '#101010');

    wrapper.find('.inputBox').simulate('click');

    expect(wrapper.find('body').prop('style')).toHaveProperty('backgroundColor', 'white');
   });
});
