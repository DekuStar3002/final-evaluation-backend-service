const { Collection, ContentType } = require('../../database/models');
const { contentService } = require('../../src/services');

describe('Content Controller', () => { 
  describe('CreateContentType', () => {
    it('should create a new ContentType', async () => {
      jest.spyOn(Collection, 'create').mockResolvedValue({
        id: 1,
        name: 'test name',
      });
      jest.spyOn(ContentType, 'create').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      const result = await contentService.createContentType('test name');
      expect(result).toEqual({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
    }); 
  });
});