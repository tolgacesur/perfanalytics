import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
    token: String,
    ttfb: Number,
    fcp: Number,
    domComplete: Number,
    windowLoadEvent: Number,
    resources: [{
        url: String,
        type : String,
        duration: String,
        transferSize : String
    }]
}, { timestamps: { createdAt: 'createdAt' }});

export default mongoose.model("Metric", MetricSchema);