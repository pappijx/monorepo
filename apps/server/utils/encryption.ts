const bcrypt = require("bcryptjs");

const encryptStrings = async (unencryptedString: string) => {
  bcrypt.hash(unencryptedString, 8, function (err, hash) {
    // Store hash in your password DB.
    return hash;
  });
};

export { encryptStrings };
