
// Logout
exports.delete = (req, res) => {
    res.status(200).json({ status: true, message: "Successfully signed out.", token: null });
};
