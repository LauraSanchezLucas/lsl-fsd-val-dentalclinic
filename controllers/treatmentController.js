const {  Service } = require('../models/service');


const treatmentController = {};

treatmentController.getAllService = async(req, res) => {
    try {
        const treatment = await Service.findAll()
        return res.json(
            {
                success: true,
                message: "access succes successfully",
                treatment: treatment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}

module.exports = treatmentController;