type Props = {
  jobRole: 'FrontEnd' | 'BackEnd' | 'FullStack' | 'PlanMaster' | 'Designer';
};

const makeColor = (jobRole: string) => {
  switch (jobRole) {
    case 'FrontEnd':
      return 'bg-blue-400';
    case 'BackEnd':
      return 'bg-red-400';
    case 'FullStack':
      return 'bg-green-400';
    case 'PlanMaster':
      return 'bg-violet-400';
    case 'Designer':
      return 'bg-teal-400';
    default:
      return 'bg-slate-400';
  }
};

export default function JobRoleTag({ jobRole }: Props) {
  return (
    <div
      className={`w-20 h-6 border px-2 py-1 text-xs text-center shadow-sm rounded-md text-white ${makeColor(jobRole)}`}
    >
      {jobRole}
    </div>
  );
}
