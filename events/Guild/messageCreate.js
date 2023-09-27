module.exports = {
  name: "messageCreate",
  async execute(message) {
    try {
      if (message.author.bot) return;

    } catch (error) {
      log(error, "err");
    }
  },
};
