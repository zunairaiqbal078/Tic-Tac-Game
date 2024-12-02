import React from "react";

function ScoreTable({ score }) {
  return (
    <div className="max-w-md p-5 mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-center text-blue-600">
        Score Table
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-white bg-blue-500">
            <th className="px-4 py-2 text-left">Player</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-blue-50">
            <td className="px-4 py-2 text-left text-blue-700">Player X</td>
            <td className="px-4 py-2 text-left text-blue-700">{score.X}</td>
          </tr>
          <tr className="border-b hover:bg-blue-50">
            <td className="px-4 py-2 text-left text-blue-700">Player O</td>
            <td className="px-4 py-2 text-left text-blue-700">{score.O}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreTable;
