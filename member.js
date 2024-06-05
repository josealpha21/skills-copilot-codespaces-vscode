function skillsMember() {
    var member = new Member();
    member.skills = [
        new Skill('JavaScript', 4),
        new Skill('HTML', 3),
        new Skill('CSS', 3),
        new Skill('Java', 3),
        new Skill('SQL', 3),
        new Skill('Python', 2),
        new Skill('C++', 2),
        new Skill('PHP', 2)
    ];
    return member;
}