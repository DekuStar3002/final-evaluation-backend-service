const { collectionService } = require('../../src/services');
const { Collection, Content } = require('../../database/models');

describe('Collection Service', () => { 
  describe('Add Content to Collection', () => { 
    it('should create a new content', async () => {
      jest.spyOn(Collection, 'findOne').mockResolvedValue({
        ContentType: {
          id: 1
        }
      });
      jest.spyOn(Content, 'create').mockResolvedValue({
        id: 6,
        collection_id: 6,
        content_type_id: 5,
        values: {
          name1: 'value',
          name2: 'value'
        },
      });
      const result = await collectionService.addContentToCollection(1, {});
      expect(result).toEqual({
        id: 6,
        collection_id: 6,
        content_type_id: 5,
        values: {
          name1: 'value',
          name2: 'value'
        }
      });
    });
  });
});