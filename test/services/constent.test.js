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

  describe('UpdateContentType', () => {
    it('should update a ContentType', async () => {
      jest.spyOn(ContentType, 'update').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      jest.spyOn(Collection, 'update').mockResolvedValue({
        id: 1,
        name: 'test name',
      });
      const result = await contentService.updateContentType(1, 'test name');
      expect(result).toEqual({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
    });
  });
});