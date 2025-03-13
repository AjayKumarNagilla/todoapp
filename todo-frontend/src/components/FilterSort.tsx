import React from "react";

interface FilterSortProps {
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>; // For category selection
  categories: string[]; // Accept categories as a prop
}

const FilterSort: React.FC<FilterSortProps> = ({
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  setSelectedCategory,
  categories = [], // Fallback to an empty array if categories is undefined
}) => {
  return (
    <div>
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="dueDate">Due Date</option>
        <option value="creationDate">Creation Date</option>
      </select>

      {/* Category Filter */}
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option value="">No categories available</option>
        )}
      </select>
    </div>
  );
};

export default FilterSort;
