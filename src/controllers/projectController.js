const createProject = require('../services/productService')
module.exports = {
    postCreateProjects: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}