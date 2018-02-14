const channels = [{
    id: 1,
    name: 'soccer',
  }, {
    id: 2,
    name: 'baseball',
  }];

  let nextId = 3;

  export const resolvers = {
    Query: {
      channels: () => {
        return channels;
      },
    },
    Mutation: {
      addChannel: (root, args) => { // 두번째 인자 받기위해 root 인자받음. args는 사용자 지정
        const newChannel = { id: nextId++, name: args.name };
        channels.push(newChannel);
        return newChannel;
      },
    },
  };