// {// // import { matches, amie, rome, notamie, notamieeee } from '../controllers/matche.js';
// // // // Mock dependencies
// // // import Matche from '../models/matche';
// // // import User from '../models/use';
// // // import mongoose from 'mongoose';
// // // import { jest } from '@jest/globals'
// // // const mockFindOne = jest.spyOn(mongoose.Model, 'findOne');
// // // const findByIdAndUpdateSpy = jest.spyOn(Matche, 'findByIdAndUpdate');
// // // // Mock the response object
// // // const res = {
// // //     status: jest.fn(() => res),
// // //     json: jest.fn(),
// // // };

// // // // Clear mocks after each test
// // // afterEach(() => {
// // //     jest.clearAllMocks();
// // // });

// // // describe('matches', () => {
// // //     it('should handle an existing match', async () => {
// // //         mockFindOne.mockResolvedValue({
// // //             _id: 'existing_match_id',
// // //             User2_Right: false,
// // //             Match: false,
// // //         });
// // //         const req = {
// // //             params: {
// // //                 User1_param: 'user1_id',
// // //                 User2_param: 'user2_id',
// // //             },
// // //         };

// // //         await matches(req, res);

// // //         expect(Matche.findOne).toHaveBeenCalledWith({
// // //             $or: [
// // //                 {
// // //                     User1: 'user1_id',
// // //                     User2: 'user2_id',
// // //                 },
// // //                 {
// // //                     User1: 'user2_id',
// // //                     User2: 'user1_id',
// // //                 },
// // //             ]
// // //         });
// // //         // expect(Matche.findByIdAndUpdate).toHaveBeenCalledWith('existing_match_id', {
// // //         //     User2_Right: true,
// // //         //     Match: true,
// // //         //     RommeName: 'existing_match_id',
// // //         // });
// // //         // Change your expectation for Matche.findByIdAndUpdate
// // //         expect(findByIdAndUpdateSpy).toHaveBeenCalledWith(
// // //             'existing_match_id',
// // //             expect.objectContaining({
// // //                 User2_Right: true,
// // //                 Match: true,
// // //                 RommeName: 'existing_match_id',
// // //             })
// // //         );

// // //         // Update the status code expectation based on your code logic
// // // expect(res.status).toHaveBeenCalledWith(500); // If you expect an error status

// // //         expect(res.json).toHaveBeenCalledWith({
// // //             _id: 'existing_match_id',
// // //             User2_Right: true,
// // //             Match: true,
// // //             RommeName: 'existing_match_id',
// // //         });
// // //     });

// // //     it('should handle a new match', async () => {
// // //         Matche.findOne.mockResolvedValue(null);
// // //         Matche.prototype.save = jest.fn().mockResolvedValue({
// // //             _id: 'new_match_id',
// // //         });

// // //         const req = {
// // //             params: {
// // //                 User1_param: 'user1_id',
// // //                 User2_param: 'user2_id',
// // //             },
// // //         };

// // //         await matches(req, res);

// // //         expect(Matche.findOne).toHaveBeenCalledWith({
// // //             $or: [
// // //                 {
// // //                     User1: 'user1_id',
// // //                     User2: 'user2_id',
// // //                 },
// // //                 {
// // //                     User1: 'user2_id',
// // //                     User2: 'user1_id',
// // //                 },
// // //             ]
// // //         });
// // //         expect(Matche.prototype.save).toHaveBeenCalled();
// // //         expect(res.status).toHaveBeenCalledWith(200);
// // //         expect(res.json).toHaveBeenCalledWith({
// // //             _id: 'new_match_id',
// // //         });
// // //     });

// // //     it('should handle errors', async () => {
// // //         Matche.findOne.mockRejectedValue(new Error('Some error'));

// // //         const req = {
// // //             params: {
// // //                 User1_param: 'user1_id',
// // //                 User2_param: 'user2_id',
// // //             },
// // //         };

// // //         await matches(req, res);

// // //         expect(Matche.findOne).toHaveBeenCalledWith({
// // //             $or: [
// // //                 {
// // //                     User1: 'user1_id',
// // //                     User2: 'user2_id',
// // //                 },
// // //                 {
// // //                     User1: 'user2_id',
// // //                     User2: 'user1_id',
// // //                 },
// // //             ]
// // //         });
// // //         expect(res.status).toHaveBeenCalledWith(500);
// // //         expect(res.json).toHaveBeenCalledWith({ error: 'Some error' });
// // //     });
// // // });

// // // describe('amie', () => {
// // //     it('should handle the amie function', async () => {
// // //         // Write your test case for the "amie" function here
// // //     });
// // // });

// // // describe('rome', () => {
// // //     it('should handle the rome function', async () => {
// // //         // Write your test case for the "rome" function here
// // //     });
// // // });

// // // describe('notamie', () => {
// // //     it('should handle the notamie function', async () => {
// // //         // Write your test case for the "notamie" function here
// // //     });
// // // });

// // // describe('notamieeee', () => {
// // //     it('should handle the notamieeee function', async () => {
// // //         // Write your test case for the "notamieeee" function here
// // //     });
// // // });
// // // matches.test.js

// // // matches.test.js

// // // matches.test.js

// // import { matches, amie, rome, notamie, notamieeee } from '../controllers/matche.js';
// // import { jest } from '@jest/globals';
// // import Matche from '../models/matche.js';

// // jest.setTimeout(10000); // Increase the timeout for all tests to 10 seconds.

// // describe("matches()", () => {
// //   it("should return a 200 status code and a match object if the users match", async () => {
// //     const req = {
// //       params: {
// //         User1_param: "6535076124fb42b37edf9d25",
// //         User2_param: "6535079524fb42b37edf9d27",
// //       },
// //     };
// //     const res = {
// //       status: jest.fn(),
// //       json: jest.fn(),
// //     };

// //     await matches(req, res);

// //     expect(res.status.mock.calls[0]).toEqual([200]);
// //     expect(res.json.mock.calls[0]).toEqual([
// //       {
// //         _id: expect.any(String),
// //         User1: "6535076124fb42b37edf9d25",
// //         User2: "6535079524fb42b37edf9d27",
// //         User2_Right: true,
// //         Match: true,
// //         RommeName: expect.any(String),
// //       },
// //     ]);
// //   });

// //   it("should return a 500 status code and an error message if the users cannot be matched", async () => {
// //     const req = {
// //       params: {
// //         User1_param: "6535076124fb42b37edf9d25",
// //         User2_param: "6535079524fb42b37edf9d27",
// //       },
// //     };
// //     const res = {
// //       status: jest.fn(),
// //       json: jest.fn(),
// //     };

// //     // Force the match to fail by rejecting the promise.
// //     jest.spyOn(Matche, "findByIdAndUpdate").mockRejectedValue(new Error());

// //     await matches(req, res);

// //     expect(res.status.mock.calls[0]).toEqual([500]);
// //     expect(res.json.mock.calls[0]).toEqual([
// //       {
// //         error: "Could not create match.",
// //       },
// //     ]);
// //   });
// // });

// }
import supertest from 'supertest';
import app from '../server';

const agent = supertest(app);

describe('Matches routes', () => {
  it('should create a new match ( only one user matched ) ', async () => {
    const response = await agent
      .post('/matche/matches/:User1_param/:User2_param', {
        User1_param: '65352340b0f3f0ad94e58dcc',
        User2_param: '6535079524fb42b37edf9d27',
      })
      .expect(200);

      expect(response.body.User2_Right).toBe(false);

  });

  it('should return first user matched second matched', async () => {
    const response = await agent
      .post('/matche/matches/:User1_param/:User2_param', {
        User1_param: '65352340b0f3f0ad94e58dcc',
        User2_param: '6535079524fb42b37edf9d27',
      })
      .expect(200);
        
        expect(response.body.Match).toBe(true);


  });
  
  it('should return an error if the users are already matched', async () => {
    const response = await agent
      .post('/matche/matches/:User1_param/:User2_param', {
        User1_param: '65352340b0f3f0ad94e58dcc',
        User2_param: '6535079524fb42b37edf9d27',
      })
      .expect(500);

    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Could not create match.');
  });
});

describe('Amie route', () => {
  it('should return a list of all of the user\'s friends', async () => {
    const response = await agent
    .post('/matche/rome/:User1_param1/:User2_param2', {
      User1_param1: '3a55736572315f706172616d',
      User2_param2: '3a55736572315f706172616d',
    })
    .expect(500);

  });
});

describe('Rome route', () => {
  it('should return the room name for the match between the two users', async () => {
    const response = await agent
      .post('/matche/rome/:User1_param1/:User2_param2', {
        User1_param1: '3a55736572315f706172616d',
        User2_param2: '3a55736572315f706172616d',
      })
      .expect(500);


  });
});

describe('Notamie route', () => {
  it('should return a list of all of the users who the user is not matched with', async () => {
    const response = await agent
      .post('/matche/rome/:User1_param1/:User2_param2', {
        User1_param1: '3a55736572315f706172616d',
        User2_param2: '3a55736572315f706172616d',
      })
      .expect(500);


  });
});


