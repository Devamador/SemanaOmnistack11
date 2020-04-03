const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generation Unique ID', () => {
    it('should generation an unique id',() =>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8)
    })
})