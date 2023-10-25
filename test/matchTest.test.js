
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


