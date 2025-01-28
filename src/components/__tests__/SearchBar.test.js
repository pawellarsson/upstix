import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe("Test of SearchBar", () => {
    test("If SearchBar is rendered!", () => {
        const { getByText } = render(<SearchBar onFormSubmit="cats" />);
        expect(getByText("React uTubi")).toBeInTheDocument();
    });
});
