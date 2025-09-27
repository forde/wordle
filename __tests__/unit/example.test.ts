import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

jest.mock('next/headers', () => ({
    cookies: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}));

global.fetch = jest.fn();


describe('Example test', () => {
    const mockCookies = {
        get: jest.fn(),
    };

    const mockedRedirect = redirect as jest.MockedFunction<typeof redirect>;

    beforeEach(() => {
        jest.clearAllMocks();
        (cookies as jest.Mock).mockResolvedValue(mockCookies);
        (global.fetch as jest.Mock).mockClear();
        mockedRedirect.mockImplementation(() => {
            return undefined as never;
        });
    });

    describe('example', () => {
        it('example', async () => {
            const example = () => true
            expect(example()).toEqual(true);
        });
    });

});
