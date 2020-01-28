import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
    token: String,
    url: String,
    data : {
        ttfb: Number,
        fcp: Number,
        domComplete: Number,
        windowLoadEvent: Number,
        resources: Array
    }
}, { timestamps: { createdAt: 'createdAt'}, versionKey: false});

export default mongoose.model("Metric", MetricSchema);