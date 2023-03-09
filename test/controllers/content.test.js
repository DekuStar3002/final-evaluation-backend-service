const { contentService } = require('../../src/services');
const { contentController } = require('../../src/controllers');

describe('Content Controller', () => { 
  describe('Create Content Type', () => { 
    const mockData = {
      id: 1,
      name: 'test content',
    };

    it('should create a new content type', async () => {
      jest.spyOn(contentService, 'createContentType').mockResolvedValue(mockData);
      const mockReq = {
        body: jest.fn(),
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await contentController.createContentType(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(201);
      expect(mockRes.json).toBeCalledWith({ data: mockData });
    });

    it('should send error response', async () => {
      jest.spyOn(contentService, 'createContentType').mockRejectedValue(new Error('Internal Server Error'));
      const mockReq = {
        body: jest.fn(),
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await contentController.createContentType(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(500);
      expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
  });

  describe('Update Content Type', () => { 
    const mockData = {
      id: 1,
      name: 'test content',
    };

    it('should update ContentType', async () => {
      jest.spyOn(contentService, 'updateContentType').mockResolvedValue(mockData);
      const mockReq = {
        body: jest.fn(),
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await contentController.updateContentType(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith({ data: mockData });
    });

    it('should send error response', async () => {
      jest.spyOn(contentService, 'updateContentType').mockRejectedValue(new Error('Internal Server Error'));
      const mockReq = {
        body: jest.fn(),
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await contentController.updateContentType(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(500);
      expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });

    describe('Add Feature To ContentType', () => { 
      it('should add a new feature to content type', async () => {
        jest.spyOn(contentService, 'addFeatureToContentType').mockResolvedValue({ message: 'Updated Succesdfully' });
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.addFeatureToContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({ data: { message: 'Updated Succesdfully' } });
      });

      it('should send error message', async () => {
        jest.spyOn(contentService, 'addFeatureToContentType').mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.addFeatureToContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
      });
    });

    describe('Edit Feature Name Of Content Type', () => { 
      it('should edit feature name of content type', async () => {
        jest.spyOn(contentService, 'editFeatureNameOfContentType').mockResolvedValue({ message: 'Updated Succesdfully' });
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.editFeatureNameOfContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({ data: { message: 'Updated Succesdfully' } });
      });
    
      it('should send error message', async () => {
        jest.spyOn(contentService, 'editFeatureNameOfContentType').mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.editFeatureNameOfContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
      });
    });

    describe('Delete Field Of Content Type', () => { 
      it('should delete feature of content type', async () => {
        jest.spyOn(contentService, 'deleteFieldOfContentType').mockResolvedValue({ message: 'Field Deleted Successfully' });
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.deleteFieldOfContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({ data: { message: 'Field Deleted Successfully' } });
      });

      it('should send error message', async () => {
        jest.spyOn(contentService, 'deleteFieldOfContentType').mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
          body: jest.fn()
        };
        const mockRes = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await contentController.deleteFieldOfContentType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
      });
    });
  });
});