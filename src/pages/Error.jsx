// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import ShapeDecorator from "@/components/shape-decorator";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-white">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10">
        <ShapeDecorator type="circle" color="#39a137" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 right-10">
        <ShapeDecorator type="circle" color="#ecd71d" className="w-10 h-10" />
      </div>

      <h1 className="text-[6rem] font-extrabold text-[#007BFF] mb-4">404</h1>
      <p className="max-w-xl mb-6 text-xl text-center text-gray-600">
        Oops! The page you're looking for doesn't exist. It might have been
        removed or the link is broken.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-[#702dff] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#5c21e0] transition-all"
        >
          Go Home
        </Link>
        <Link
          to="/start-creating"
          className="border border-[#702dff] text-[#702dff] px-6 py-3 rounded-lg font-medium hover:bg-[#f2ebff] transition-all"
        >
          Start Creating
        </Link>
      </div>
    </div>
  );
}
