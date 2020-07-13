import { checkForName } from '../src/client/js/nameChecker.js'

test('check the acceptable name', () => {

    const output = [
        "Picard",
        "Janeway",
        "Kirks",
        "Archer",
        "Georgiou"
    ]

    expect(output).toContain(checkForName('Kirks'))
});