const { Collection, ContentType, Content } = require('../../database/models');
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
      expect(result).toEqual({ message: 'Updated Successfully' });
    });
  });

  // describe('Add Feature To Content Type', () => { 
  //   it('should add a new Feature to Content Type', async () => {
  //     jest.spyOn(ContentType, 'findOne').mockResolvedValue({ 
  //       id: 1,
  //       collection_id: 1,
  //       name: 'test name',
  //       field: {
  //         'test_field': 'value1'
  //       }
  //     });
  //     jest.spyOn(ContentType, 'update').mockResolvedValue();
  //     jest.spyOn(Content, 'findAll').mockResolvedValue([ '1', '2' ]);
  //     jest.spyOn(Promise, 'all').mockResolvedValue();
  //     const result = await contentService.addFeatureToContentType(1, 'test_field', 'test_type');
  //     expect(result).toEqual({ message: 'Field Added Successfully' });
  //   });
  // });

  describe('Edit Feature Name of Content Type', () => { 
    it('should edit a Feature Name of Content Type', async () => {
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({ 
        id: 1,
        collection_id: 1,
        name: 'test name',
        field: {
          feat1: 'value1'
        }
      });
      jest.spyOn(ContentType, 'update').mockResolvedValue();
      jest.spyOn(Content, 'findAll').mockResolvedValue([ '1', '2' ]);
      jest.spyOn(Promise, 'all').mockResolvedValue();
      const result = await contentService.editFeatureNameOfContentType(1, 'test_field', 'test_field_new');
      expect(result).toEqual({ message: 'Edited Field Successfully' });
    });
  });

  describe('Delete Feature of Content Type', () => { 
    it('should delete a Feature of Content Type', async () => { 
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({ 
        id: 1,
        collection_id: 1,
        name: 'test name',
        field: {
          feat1: 'value1'
        }
      });
      jest.spyOn(ContentType, 'update').mockResolvedValue();
      jest.spyOn(Content, 'findAll').mockResolvedValue([ '1', '2' ]);
      jest.spyOn(Promise, 'all').mockResolvedValue();
      const result = await contentService.deleteFieldOfContentType(1, 'test_field');
      expect(result).toEqual({ message: 'Field Deleted Successfully' });
    });
  });
});