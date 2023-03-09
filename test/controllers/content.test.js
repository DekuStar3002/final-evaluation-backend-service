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
  });
});